import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';
@Entity('Apartment')
export class Apartment {
    @ObjectIdColumn()
    _id: ObjectId;
    @Column()
    name: string;
    @Column()
    detail: string;
    @Column()
    price: number;
}