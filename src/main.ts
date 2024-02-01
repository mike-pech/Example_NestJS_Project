import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Обращаемся к объекту NestFactory (сразу видно объектно-ориентированный паттерн!) и инстанцируем наше приложение
  const app = await NestFactory.create(AppModule);
  // Читаем из файла .env наш сервер и порт
  const port: number = parseInt(process.env.PORT);
  const server: string = process.env.SERVER;
  // Указываем порт и сервер
  await app.listen(port, server);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
