import { Module } from '@nestjs/common';
import { UserModule } from './api/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './api/users/user.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'users.db',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),],
  providers: [],
})
export class AppModule {}
