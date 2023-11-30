import { Exclude } from 'class-transformer';
import { Role } from './../../auth/models/roles.model';

import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Student } from './../../students/entities/student.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  // @Column({ unique: true, nullable: true })
  // publilcAddress?: string;

  // @Column({ default: Math.floor(Math.random() * 10000), nullable: true })
  // nonce?: number;

  @Column()
  phone: string;

  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;

  @Column({ default: false })
  isConfirmed: boolean;

  @OneToMany(() => User, (user) => user.students)
  students: Student;
}
