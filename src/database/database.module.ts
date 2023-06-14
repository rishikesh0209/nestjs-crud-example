import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get('DB_HOST'),
          port: 5432,
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          // database: configService.get('DB_NAME'),
          database: config.get('DB_NAME'),
          // entities: [
          //   "src/entity/**/*.ts"
          // ],
          entities:["dist/**/*.entity.js"],
          // entities: [User, Reports],
          synchronize: true, // turn off for production
          logging:true
        };
      },
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'Rishikesh@0209',
    //   // database: configService.get('DB_NAME'),
    //   database: 'nest-crud-db',
    //   // entities: [
    //   //   "src/entity/**/*.ts"
    //   // ],
    //   entities:[User,Reports],
    //   synchronize: true, // turn off for production
    // }),
  ],
})
export class DatabaseModule {}
