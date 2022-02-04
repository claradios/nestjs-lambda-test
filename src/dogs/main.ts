import { NestFactory } from '@nestjs/core';
import { DogsModule } from './dogs.module';
import { setUp } from './main.setup';

const bootstrap = async () => {
  const app = await NestFactory.create(DogsModule);
  setUp(app);
  await app.listen(process.env.PORT || 3000);
};

bootstrap();
