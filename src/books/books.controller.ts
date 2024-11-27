import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { BooksService } from './books.service';
  import { Book } from './book.entity';
  
  @Controller('books')
  export class BooksController {
    constructor(private readonly booksService: BooksService) {}
  
    @Get()
    async findAll(): Promise<Book[]> {
      return this.booksService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Book> {
      return this.booksService.findOne(id);
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createBookDto: Partial<Book>): Promise<Book> {
      return this.booksService.create(createBookDto);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() updateBookDto: Partial<Book>,
    ): Promise<Book> {
      await this.booksService.update(id, updateBookDto);
      return this.booksService.findOne(id); 
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number): Promise<void> {
      await this.booksService.remove(id);
    }
  }
  