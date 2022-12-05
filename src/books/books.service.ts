import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { createBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
    private books: any[]=[];

    getBooks(title: string, author: string, category:string): any[] {
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
            return isMatch;
        });
        return books;
    }

    getBook(id:string){
        const bookIdx = this.findBookById(id);
        return this.books[bookIdx];
    }

    createBook(createBookDto: createBookDto) {
        const {title, author, category, year} = createBookDto;
        this.books.push({
            id: uuidv4(),
            title,
            author,
            category,
            year,
        });
    }

    updateBook(id: string, title: string, author: string, category:string) {
        const bookIdx = this.findBookById(id);
        this.books[bookIdx].title = title;
        this.books[bookIdx].author = author;
        this.books[bookIdx].category = category;
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
