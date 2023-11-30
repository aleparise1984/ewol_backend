import { PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsLowercase,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Role } from './../../auth/models/roles.model';

import { Column } from 'typeorm';
import { Student } from './../../students/entities/student.entity';
import { CreateStudentDto } from './../../students/dto/student.dto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;

  @IsLowercase()
  @IsString()
  @IsOptional()
  publilcAddress?: string;

  @IsNumber()
  @IsOptional()
  nonce?: number;

  @Column()
  phone: string;

  @IsString()
  @IsLowercase()
  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;

  @IsBoolean()
  @Column({ default: false })
  isConfirmed: boolean;

  @IsObject()
  @Column(() => Student)
  student: CreateStudentDto;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
