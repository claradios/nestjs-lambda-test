import {
  INestApplication,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setUp = (nestApp: INestApplication) => {
  nestApp.enableVersioning({
    type: VersioningType.URI,
  });

  nestApp.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('test-nest-serverless')
    .setDescription('Cats and Dogs APIs')
    .build();
  const document = SwaggerModule.createDocument(nestApp, swaggerConfig);
  SwaggerModule.setup('api', nestApp, document);
};
