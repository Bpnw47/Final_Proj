import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApartmentsModule } from './apartments/apartments.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ApartmentDB'),
    ApartmentsModule,
    PostsModule,
    UsersModule,
  ],
})
export class AppModule {}
