import { Controller, Post, Get, Put, Delete, Param, Body, NotFoundException, ValidationPipe } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body(new ValidationPipe()) user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body(new ValidationPipe()) user: Partial<User>): Promise<User> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
