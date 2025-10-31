import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop()
  postId: string; // เก็บรหัสเฉพาะของโพสต์

  @Prop({ required: true })
  name: string; // ชื่อหอพัก

  @Prop()
  detail: string; // รายละเอียดหอพัก

  @Prop()
  price: number; // ราคา

  @Prop([String])
  images: string[]; // ลิงก์รูปภาพ
}

export const PostSchema = SchemaFactory.createForClass(Post);
