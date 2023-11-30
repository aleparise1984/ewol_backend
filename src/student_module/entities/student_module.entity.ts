import { Module } from 'src/module/entities/module.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REPROBATE = 'REPROBATE',
}

@Entity()
export class StudentModule {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Student, (student) => student.student_modules)
  student: Student;

  @ManyToOne(() => Module, (moodule) => moodule.student_modules)
  moodule: Module;

  @Column({
    nullable: true,
  })
  project_url: string;

  @Column({
    nullable: true,
  })
  project_feedback: string;

  @Column('enum', {
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @Column({
    nullable: true,
  })
  survey_response: string;
}
