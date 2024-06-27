import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    )
    .enableCors({
      origin: 'http://localhost:5173', // Vue.js frontend URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
  await app.listen(3001);
}
bootstrap();

/*
GET -> OBTENER -> obtener datos
POST -> CREAR -> insertar datos nuevos en la base de datos
PATCH -> ACTUALIZAR -> actualizar datos en la base de datos
DELETE -> ELIMINAR -> eliminar datos en la base de datos
*/
