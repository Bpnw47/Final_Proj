import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './apartments/apartment.entity';
import { ApartmentsModule } from './apartments/apartments.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '27017', 10),
      database: process.env.DB_NAME || 'ApartmentDB',
      entities: [Apartment],
      synchronize: false, // ปิดใน production 
    }),
    ApartmentsModule,
  ],
})
export class AppModule { }