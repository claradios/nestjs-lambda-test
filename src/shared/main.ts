import { NestFactory } from '@nestjs/core';
import { SharedModule } from './shared.module';
// import { setUp } from './main.setup';

const bootstrap = async () => {
  const app = await NestFactory.create(SharedModule);
  // setUp(app);
  await app.listen(process.env.PORT || 3000);
};

bootstrap();
