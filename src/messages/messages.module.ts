import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers:[MessagesService,MessagesRepository],
  exports:[MessagesService] //any service you want to use across modules as the providers are private to the modules they are mentioned
})
export class MessagesModule {}
