import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';
import { Apartment } from './apartment.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Apartment])], // Register the Apartment entity
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
})
export class ApartmentsModule { }