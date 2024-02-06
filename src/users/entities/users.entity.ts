import { Exclude } from "class-transformer";
import { Role } from "./../../auth/models/roles.model";

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Student } from "./../../students/entities/student.entity";
import { UserUser } from "src/user-user/entities/user-user.entity";

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

  @Column({ nullable: true })
  calendly: string;

  @Column({ nullable: true })
  wallet: string;

  @Column()
  phone: string;

  @Column({
    type: "enum",
    enum: Role,
  })
  role: Role;

  @Column({ default: false })
  isConfirmed: boolean;

  @OneToMany(() => User, (user) => user.students)
  students: Student;

  @OneToMany(() => UserUser, (userUser) => userUser.user)
  relatedUsers: UserUser[];
}
