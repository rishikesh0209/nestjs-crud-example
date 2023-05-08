import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { MessagesController } from './messages/messages.controller';
@Module({
  imports: [MessagesModule],
  controllers: [MessagesController],
  providers: [],
})
export class AppModule {}
