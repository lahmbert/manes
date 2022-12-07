import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { title } from 'process';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Get()
    getBooks(
        @Query('title') title: string,
        @Query('author') author: string,
        @Query('category') category: string,
        @Query('year') year: string
    ) {
        return this.booksService.getBooks(title, author, category, year);
    }

    @Get('/:id')
    getBook(@Param('id') id: string) {
        return this.booksService.getBook(id);
    }

    @Post()
    createBook(@Body() payload: CreateBookDto) {
        return this.booksService.createBook(payload);
    }

    @Put('/:id')
    updateBook(
        @Param('id') id: string,
        @Body() payload:UpdateBookDto
    ) {
        return this.booksService.updateBook(id, payload);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id: string) {
        return this.booksService.deleteBook(id);
    }
}
