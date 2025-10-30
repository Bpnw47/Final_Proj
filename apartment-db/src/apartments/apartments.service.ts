import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Apartment } from './apartment.entity';
import { CreateApartmentDto } from './create-apartment.dto';
import { UpdateApartmentDto } from './update-apartment.dto';
@Injectable()
export class ApartmentsService {
    constructor(
        @InjectRepository(Apartment)
        private apartmentsRepository: Repository<Apartment>
    ) { }
    async findAll(): Promise<Apartment[]> {
        return this.apartmentsRepository.find();
    }
    async findOne(id: string): Promise<Apartment> {
        const apartment = await this.apartmentsRepository.findOneBy({
            _id: new ObjectId(id),
        });
        if (!apartment) {
            throw new NotFoundException(`Apartment with ID ${id} not found`);
        }
        return apartment;
    }
    async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
        const apartment = this.apartmentsRepository.create(createApartmentDto);
        return this.apartmentsRepository.save(apartment);
    }
    async update(id: string, updateApartmentDto: UpdateApartmentDto): Promise<Apartment> {
        const result = await this.apartmentsRepository.update(
            { _id: new ObjectId(id) },
            updateApartmentDto
        );
        if (result.affected === 0) {
            throw new NotFoundException(`Apartment with ID ${id} not found`);
        }
        const updatedApartment = await this.apartmentsRepository.findOneBy({
            _id: new ObjectId(id),
        });
        if (!updatedApartment) {
            throw new NotFoundException(`Apartment with ID ${id} not found`);
        }
        return updatedApartment;
    }
    async remove(id: string): Promise<void> {
        const result = await this.apartmentsRepository.delete({
            _id: new ObjectId(id),
        });
        if (result.affected === 0) {
            throw new NotFoundException(`Apartment with ID ${id} not found`);
        }
    }
} 