import { Module } from '@nestjs/common';
import { DogsModule } from '../dogs/dogs.module';
import { CatsModule } from '../cats/cats.module';
@Module({
  imports: [DogsModule, CatsModule],
})
export class DocumentationModule {}
