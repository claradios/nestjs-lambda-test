import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  getHello(): string {
    return 'Hello World!!! Welcome to the DOGS service.';
  }

  getAll(): Array<object> {
    return [
      { dogName: 'Rain', age: 12 },
      { dogName: 'Ipa', age: 50 },
    ];
  }
}
