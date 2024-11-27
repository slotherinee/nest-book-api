import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST || 'postgres',
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            username: process.env.DB_USER || 'admin',
            password: process.env.DB_PASS || 'admin',
            database: process.env.DB_NAME || 'book_library',
            autoLoadEntities: true,
            synchronize: true,
        })
    ],
})
export class DatabaseModule {}
