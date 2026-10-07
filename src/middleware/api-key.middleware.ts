import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== "wazedjiad@gmail.com") {
      throw new UnauthorizedException('Invalid API key'); 1
    }
    next();
  }
}
