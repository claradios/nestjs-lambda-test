import { Module } from '@nestjs/common';
import { CatsController } from './application/rest/cats/cats.controller';
import { DogsController } from './application/rest/dogs/dogs.controller';
import { CatsService } from './domain/services/cats/cats.service';
import { DogsService } from './domain/services/dogs/dogs.service';

@Module({
  imports: [],
  controllers: [CatsController, DogsController],
  providers: [CatsService, DogsService],
})
export class AppModule {}
