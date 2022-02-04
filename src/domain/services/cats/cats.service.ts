import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getHello(): string {
    return 'Hello World! Welcome to the CATS service';
  }

  getAll(): Array<object> {
    return [
      { catName: 'Rosina', age: 12 },
      { catName: 'Cati Peluso', age: 50 },
    ];
  }
}
