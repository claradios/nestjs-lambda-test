import { Module } from '@nestjs/common';
import { CatsController } from './application/rest/cats/cats.controller';
import { CatsService } from './domain/services/cats/cats.service';
import { SharedModule } from '../shared/shared.module';
@Module({
  imports: [SharedModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
