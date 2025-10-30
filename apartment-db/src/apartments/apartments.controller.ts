import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
} from '@nestjs/common';
import { ApartmentsService } from './apartments.service'; // Corrected import path 
import { Apartment } from './apartment.entity'; // Corrected import path 
import { CreateApartmentDto } from './create-apartment.dto';
import { UpdateApartmentDto } from './update-apartment.dto'; // Corrected import path 
@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) { }
    @Get()
    findAll(): Promise<Apartment[]> {
        return this.apartmentsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Apartment> {
        return this.apartmentsService.findOne(id);
    }
    @Post()
    create(@Body() createApartmentDto: CreateApartmentDto): Promise<Apartment> {
        return this.apartmentsService.create(createApartmentDto);
    }
    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateApartmentDto: UpdateApartmentDto
    ): Promise<Apartment> {
        return this.apartmentsService.update(id, updateApartmentDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.apartmentsService.remove(id);
    }
}