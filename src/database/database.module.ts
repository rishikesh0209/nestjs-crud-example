import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reports } from 'src/reports/reports.entity';
import { User } from 'src/users/user.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        // database: configService.get('DB_NAME'),
        database: 'nest-crud-db',
        // entities: [
        //   "src/entity/**/*.ts"
        // ],
        entities:[User,Reports],
        synchronize: true, // turn off for production
      }),]
})
export class DatabaseModule {}
