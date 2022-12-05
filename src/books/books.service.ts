import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksDto } from './dto/get-books.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
    private books: any[]=[];

    getBooks(getBooksDto:GetBooksDto): any[] {
        const {title, author, category, year} = getBooksDto;
        const books = this.books.filter((book)=>{
            let isMatch = true;
            if (title && book.title != title) {
                isMatch = false;
            }
            if (author && book.author != author) {
                isMatch = false;
            }
            if (category && book.category != category) {
                isMatch = false;
            }
            if (year && book.year != year) {
                isMatch = false;
            }
            return isMatch;
        });
        return books;
    }

    getBook(id:string){
        const bookIdx = this.findBookById(id);
        return this.books[bookIdx];
    }

    createBook(CreateBookDto: CreateBookDto) {
        const {title, author, category, year} = CreateBookDto;
        this.books.push({
            id: uuidv4(),
            title,
            author,
            category,
            year,
        });
    }

    updateBook(id: string, UpdateBookDto: UpdateBookDto) {
        const {title, author, category, year} = UpdateBookDto;
        const bookIdx = this.findBookById(id);
        this.books[bookIdx].title = title;
        this.books[bookIdx].author = author;
        this.books[bookIdx].category = category;
        this.books[bookIdx].year = year;
    }

    findBookById(id:string) {
        const bookIdx = this.books.findIndex((book)=> book.id === id);
        if(bookIdx === -1) {
            throw new NotFoundException(`Book with id ${id} is not found`);
        }
        return bookIdx;
    }

    deleteBook(id:string) {
        const bookIdx = this.findBookById(id);
        this.books.splice(bookIdx, 1);
    }

}
