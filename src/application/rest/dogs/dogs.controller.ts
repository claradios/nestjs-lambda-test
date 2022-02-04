import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger/dist/decorators';
import { DogsService } from '../../../domain/services/dogs/dogs.service';

@ApiTags('dogs')
@Controller({
  path: 'dogs',
  version: '1',
})
export class DogsController {
  constructor(private readonly appService: DogsService) {}

  @ApiOperation({ summary: 'Get welcome message' })
  @ApiOkResponse({ status: 201 })
  @Get('/welcome')
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: 'Get meeting information' })
  @ApiOkResponse({ status: 201 })
  @Get('/all')
  getAll(): Array<object> {
    return this.appService.getAll();
  }
}
