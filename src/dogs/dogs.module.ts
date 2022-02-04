import { Module } from '@nestjs/common';
import { DogsController } from './application/rest/dogs/dogs.controller';
import { DogsService } from './domain/services/dogs/dogs.service';
import { SharedModule } from '../shared/shared.module';
@Module({
  imports: [SharedModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
