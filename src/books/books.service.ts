import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entity/book.entity';
import { BookRepository } from './repository/book.repository';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(BookRepository)
        private readonly bookRepository: BookRepository,
        ) { }

    async getBooks(filter: FilterBookDto): Promise<Book[]> {
        return await this.bookRepository.getBooks(filter);
    }


    //     private books: any[] = [];

    // getBooks(filter:FilterBookDto): any[] {
    //     const {title, category, author, min_year, max_year} = filter;
    //     const books = this.books.filter((book) => {
    //         if (title && book.title != title) {
    //             return false;
    //         }
    //         if (author && book.author != author) {
    //             return false;
    //         }
    //         if (category && book.category != category) {
    //             return false;
    //         }
    //         if (min_year && book.year < min_year) {
    //             return false;
    //         }
    //         if (max_year && book.year > max_year) {
    //             return false;
    //         }
    //         return true;
    //     });
    //     return books;
    // }

    // getBook(id: string) {
    //     const bookIdx = this.findBookById(id);
    //     return this.books[bookIdx];
    // }

    // createBook(createBookDto: CreateBookDto) {
    //     const {title, category, author, year} = createBookDto;
    //     this.books.push({
    //         id: uuidv4(),
    //         title,
    //         author,
    //         category,
    //         year,
    //     });
    // }

    // updateBook(
    //     id: string,
    //     updateBookDto: UpdateBookDto
    // ) {
    //     const {title, category, author, year} = updateBookDto;
    //     const bookIdx = this.findBookById(id);
    //     this.books[bookIdx].title = title;
    //     this.books[bookIdx].author = author;
    //     this.books[bookIdx].category = category;
    //     this.books[bookIdx].year = year;
    // }

    // findBookById(id: string) {
    //     const bookIdx = this.books.findIndex((book) => book.id === id);
    //     if (bookIdx === -1) {
    //         throw new NotFoundException(`Book with id: ${id} is not found`);
    //     }
    //     return bookIdx;
    // }

    // deleteBook(id: string) {
    //     const bookIdx = this.findBookById(id);
    //     this.books.splice(bookIdx, 1);
    // }
}
