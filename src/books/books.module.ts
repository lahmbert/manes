import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './entity/book.entity';
import { BookRepository } from './repository/book.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository, Book])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
