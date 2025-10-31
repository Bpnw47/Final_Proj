import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config(); // โหลด .env file
console.log('Environment variables:', {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
});
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // เพิ่ม CORS configuration
  app.enableCors({
    origin: 'http://localhost:5173', // URL ของ Frontend (Vite default port)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
console.log('**************************************************************');
console.log('Starting Backend...AT PORT:', process.env.PORT ?? 3000);
console.log('**************************************************************');
void bootstrap();
