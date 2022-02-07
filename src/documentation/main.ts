import { NestFactory } from '@nestjs/core';
import { DocumentationModule } from './documentation.module';
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { ExpressAdapter } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below
const binaryMimeTypes: string[] = ['text/html', 'text/css'];

let cachedServer: Server;
// TODO: make swagger work
function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('The Cats and Dogs API')
    .setVersion('1.0.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      DocumentationModule,
      new ExpressAdapter(expressApp),
    );
    nestApp.use(eventContext());
    setupSwagger(nestApp);
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
  if (event.path === '/swagger') {
    event.path = '/swagger/';
  }
  console.log(event.path);
  event.path = event.path.includes('swagger-ui')
    ? `/swagger${event.path}`
    : event.path;

  cachedServer = cachedServer ?? (await bootstrapServer());
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
