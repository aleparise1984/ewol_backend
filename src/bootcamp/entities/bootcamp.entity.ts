import { Module } from 'src/module/entities/module.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Bootcamp {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({
    unique: true,
  })
  code: string;

  @Column()
  name: string;

  @Column()
  discord_url: string;

  @Column()
  date_start: Date;

  @Column()
  date_end: Date;

  @OneToMany(() => Student, (student) => student.bootcamp)
  student: Student[];

  @OneToMany(() => Module, (moodule) => moodule.bootcamp)
  moodule: Module[];
}
