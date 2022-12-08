import { EntityRepository, Repository } from "typeorm";
import { FilterBookDto } from "../dto/filter-book.dto";
import { Book } from "../entity/book.entity";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
    async getBooks(filter: FilterBookDto): Promise<Book[]> {
        const {title, category, author, min_year, max_year} = filter;

        const query = this.createQueryBuilder('book');

        if(title) {
            query.andWhere('lower(book.title) Like :title', {
                title: `%${title.toLocaleLowerCase()}%`,
            });
        }
        if(author) {
            query.andWhere('lower(book.author) Like :author', {
                author: `%${author.toLocaleLowerCase()}%`,
            });
        }
        if(category) {
            query.andWhere('lower(book.category) Like :category', {
                category: `%${category.toLocaleLowerCase()}%`,
            });
        }
        if(min_year) {
            query.andWhere('book.year >= min_year', { min_year });
        }
        if(max_year) {
            query.andWhere('book.year <= max_year', { max_year });
        }

        return await query.getMany();
    }
}