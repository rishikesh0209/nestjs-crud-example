import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true,
    envFilePath:`${process.env.NODE_ENV}.env` }),
    DatabaseModule,
    MessagesModule,
    UsersModule,
    ReportsModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

//the code above, type specifies what type of database you want to use, host, port, username, password and database are all enquires 
// about the database that you need to provide. Entities are used to create tables from your project to your database, 
// synchronize help you to effect changes being made in your code immediately to your database. However, you need to turn this off during production.
