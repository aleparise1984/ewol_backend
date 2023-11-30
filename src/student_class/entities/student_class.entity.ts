import { Class } from 'src/class/entities/class.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class StudentClass {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Student, (student) => student.student_class)
  student: Student;

  @ManyToOne(() => Class, (class_) => class_.student_class)
  class_: Class;

  @Column({
    type: 'boolean',
    default: false,
  })
  assistence: boolean;

  @Column({
    type: 'boolean',
    default: false,
  })
  like: boolean;
}
