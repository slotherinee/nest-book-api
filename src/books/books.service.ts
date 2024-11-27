import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {}

    create(book: Partial<Book>) {
        return this.bookRepository.save(book);
      }
    
      findAll() {
        return this.bookRepository.find();
      }
    
      findOne(id: number) {
        return this.bookRepository.findOne({ where: { id } });
      }
    
      update(id: number, book: Partial<Book>) {
        return this.bookRepository.update(id, book);
      }
    
      remove(id: number) {
        return this.bookRepository.delete(id);
      }
}
