import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Get()
    getAllBooks(
        @Body('title') title: string,
        @Body('author') author: string,
        @Body('category') category: string,
        @Body('year') year: string
    ) {
        return this.booksService.createBook(title, author, category, year);
    }

    // @Post()
    // getBooks(@Body('name') name:string) {
    //     return name;
    // }
}
