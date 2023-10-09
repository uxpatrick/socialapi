import { UsersModule } from '../users/users.module';
import { UsersController } from '../users/users.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AppModule,
    UsersModule
        ],
  controllers: [
        AppController],
  providers: [AppService],
})
export class AppModule {}
