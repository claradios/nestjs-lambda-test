import { NestFactory } from '@nestjs/core';
import { SharedModule } from './shared.module';

const bootstrap = async () => {
  const app = await NestFactory.create(SharedModule);
  await app.listen(process.env.PORT || 3000);
};

bootstrap();
