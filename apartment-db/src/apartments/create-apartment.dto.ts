import { IsString, IsInt, Length } from 'class-validator';
export class CreateApartmentDto {
    @IsString({ message: 'Name must be a string' })
    @Length(1, 100, { message: 'Name must be between 1 and 100 characters' })
    name: string;

    @IsString({ message: 'Detail must be a string' })
    @Length(1, 200, { message: 'Detail must be between 1 and 200 characters' })
    detail: string;

    @IsInt({ message: 'Price must be an integer' })
    price: number;
}