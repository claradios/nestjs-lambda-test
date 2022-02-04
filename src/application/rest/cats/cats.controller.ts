import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger/dist/decorators';
import { CatsService } from '../../../domain/services/cats/cats.service';

@ApiTags('cats')
@Controller({
  path: 'cats',
  version: '1',
})
export class CatsController {
  constructor(private readonly appService: CatsService) {}

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
