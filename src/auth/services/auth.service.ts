import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { PayloadToken } from './../models/token.model';
import { UsersService } from './../../users/users.service';
import { User } from './../../users/entities/users.entity';
import { MailService } from './../../mailer/mailer.service';

import { CreateUserDto } from './../../users/dto/users.dto';
import { Role } from '../models/roles.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}


  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { password, ...rta } = user;
        return rta;
      }
    }
    return null;
  }

  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(user: CreateUserDto) {
    const { email } = user;
    const userExists = await this.usersService.findOneByEmail(email);
    if (userExists)
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

    const newUser = await this.usersService.createStudent(user);
    if (!newUser)
      throw new HttpException('User not created', HttpStatus.BAD_REQUEST);

    const userToken = await this.generateJWT(newUser);
    await this.mailService.sendUserConfirmation(
      newUser,
      userToken.access_token,
    );
    return userToken;
  }

  async confirmEmail(token: string) {
    const payload = this.jwtService.verify(token);
    const user = await this.usersService.findOne(payload.sub);
    if (user) {
      user.isConfirmed = true;
      await this.usersService.update(user.id, user);
      return {
        statusCode: HttpStatus.OK,
        message: 'Email confirmed',
      };
    }
    return {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'User not found',
    };
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    } else {
      const token = this.generateJWT(user);
      await this.mailService.sendPasswordReset(user, token.access_token);
      return {
        statusCode: HttpStatus.OK,
        message: 'Email sent',
      };
    }
  }

  async resetPassword(token: string, password: string) {
    const pass = await bcrypt.hash(password, 10);
    const payload = this.jwtService.verify(token);
    const user = await this.usersService.findOne(payload.sub);
    if (user) {
      user.password = pass;
      console.log('user.pass', user.password);
      await this.usersService.update(user.id, user);
      return {
        statusCode: HttpStatus.OK,
        message: 'Password changed',
      };
    }
    return {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'User not found',
    };
  }

  async validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'Token expired',
        };
      } else {
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'Invalid token',
        };
      }
    }
  }
}
