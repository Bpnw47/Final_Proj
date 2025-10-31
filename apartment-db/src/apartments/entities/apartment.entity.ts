// src/apartments/entities/apartment.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Apartment extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  daily: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ type: [String] })
  details: string[];
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
