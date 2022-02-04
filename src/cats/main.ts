import { NestFactory } from '@nestjs/core';
import { CatsModule } from './cats.module';
import { setUp } from './main.setup';

const bootstrap = async () => {
  const app = await NestFactory.create(CatsModule);
  setUp(app);
  await app.listen(process.env.PORT || 3000);
};

bootstrap();
