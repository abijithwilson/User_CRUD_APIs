// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from '../users/users.service';
import { UserController } from '../users/users.contoller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import the TypeOrmModule with the User entity
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
