import { Bootcamp } from 'src/bootcamp/entities/bootcamp.entity';
import { Class } from 'src/class/entities/class.entity';
import { StudentModule } from 'src/student_module/entities/student_module.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ModuleItem } from './module_items.entity';

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  name: string;

  @Column()
  date_start: Date;

  @Column()
  survey_url: string;

  @Column({
    nullable: true,
  })
  project_title: string;

  @Column({
    nullable: true,
  })
  project_description: string;

  @Column({
    nullable: true,
  })
  project_date_start: Date;

  @Column({
    nullable: true,
  })
  project_date_end: Date;

  @ManyToOne(() => Bootcamp, (bootcamp) => bootcamp.moodule)
  bootcamp: Bootcamp;

  @OneToMany(() => Class, (classs) => classs.moodule)
  class: Class[];

  @OneToMany(() => ModuleItem, (module_item) => module_item.moodule)
  module_items: ModuleItem[];

  @OneToMany(() => StudentModule, (student_module) => student_module.moodule)
  student_modules: StudentModule[];
}
