import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksDto } from './dto/get-books.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService : BooksService) {}

    @Get()
   getBooks(@Query() payload:GetBooksDto) {
    return this.booksService.getBooks(payload);
   }

   @Get('/:id')
   getBook(@Param('id') id:string){
    return this.booksService.getBook(id);
   }

   @Post()
   createBook(@Body() payload:CreateBookDto) {
    return this.booksService.createBook(payload);
   }

   @Put('/:id')
   updateBook(
    @Param('id') id:string,
    @Body() payload:UpdateBookDto
    ) {
        return this.booksService.updateBook(id, payload);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id:string) {
        this.booksService.deleteBook(id);
    }
}
