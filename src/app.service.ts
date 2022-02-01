import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsername(): string {
    return 'Hello User! This is a deployment test with nest and aws lambda';
  }
}
