import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsDate, IsString, IsDateString, IsISO8601, IsPhoneNumber } from 'class-validator';
import { Transform, Type } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Column()
  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;

  @Column()
  @IsNotEmpty()
  @IsString()
  address: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  // @IsPhoneNumber()
  phone: string;
}
