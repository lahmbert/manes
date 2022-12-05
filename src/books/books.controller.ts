import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { title } from 'process';
import { BooksService } from './books.service';
import { createBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService : BooksService) {}

    @Get()
   getBooks(
    @Query('title') title:string,
    @Query('author') author:string,
    @Query('category') category:string,
   
   ) {
    return this.booksService.getBooks(title, author, category);
   }

   @Get('/:id')
   getBook(@Param('id') id:string){
    return this.booksService.getBook(id);
   }

   @Post()
   createBook(@Body() payload:createBookDto) {
    return this.booksService.createBook(payload);
   }

   @Put('/:id')
   updateBook(
    @Param('id') id:string,
    @Body('title') title:string, 
    @Body('author') author:string, 
    @Body('category') category:string
    ) {
        return this.booksService.updateBook(id, title, author, category);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id:string) {
        this.booksService.deleteBook(id);
    }
}
