import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './../../users/entities/users.entity';
import { Bootcamp } from 'src/bootcamp/entities/bootcamp.entity';
import { StudentModule } from 'src/student_module/entities/student_module.entity';
import { StudentClass } from 'src/student_class/entities/student_class.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  test_url: string;

  @Column({
    nullable: true,
  })
  test_result: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  typeform_url: string;

  @Column({ nullable: true })
  typeform_result: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  feedback: string;

  @ManyToOne(() => User, (user) => user.students)
  user: User;

  @ManyToOne(() => Bootcamp, (bootcamp) => bootcamp.student)
  bootcamp: Bootcamp;

  @OneToMany(() => StudentModule, (student_module) => student_module.student)
  student_modules: StudentModule[];

  @OneToMany(() => StudentClass, (student_class) => student_class.student)
  student_class: StudentClass[];
}
