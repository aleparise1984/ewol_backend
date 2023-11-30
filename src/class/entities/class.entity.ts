import { Module } from 'src/module/entities/module.entity';
import { StudentClass } from 'src/student_class/entities/student_class.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TypeClass {
  teoric = 'teoric',
  practical = 'practical',
}

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  video_url: string;

  @Column()
  pdf_url: string;

  @Column()
  date_start: Date;

  @ManyToOne(() => Module, (moodule) => moodule.class)
  moodule: Module;

  @OneToMany(() => StudentClass, (student_class) => student_class.class_)
  student_class: StudentClass[];
}
