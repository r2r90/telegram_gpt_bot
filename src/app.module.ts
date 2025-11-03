import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';

@Module({
  imports: [TelegramModule, ChatgptModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
