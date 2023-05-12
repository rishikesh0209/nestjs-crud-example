import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // this is to make sure additional properties are stripped out for security concerns

  }
  )) //validate on the routes
  await app.listen(3000);
}
bootstrap();
