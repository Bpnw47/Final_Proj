// src/apartments/apartments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Apartment } from './entities/apartment.entity';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectModel(Apartment.name) private apartmentModel: Model<Apartment>,
  ) {}

  async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
    const newApartment = new this.apartmentModel(createApartmentDto);
    return newApartment.save();
  }
}
