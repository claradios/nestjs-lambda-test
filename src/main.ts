import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUp } from './main.setup';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  setUp(app);
  await app.listen(process.env.PORT || 3000);
};

bootstrap();
