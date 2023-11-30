import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  UseGuards,
  Patch,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

import { Public } from './../auth/decorators/public.decorator';
import { RolesGuard } from './../auth/guards/roles.guard';
import { Roles } from './../auth/decorators/roles.decorator';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { Role } from './../auth/models/roles.model';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/users.entity';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Roles(Role.ADMIN_EWOL, Role.USER_EWOL)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Public()
  @Post('student')
  createStudent(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createStudent(createUserDto);
  }

  @Public()
  @Get()
  findAll(Request: Request) {
    console.log(Request.headers);
    return this.usersService.findAll();
  }

  @Public()
  @Get('/candidates')
  findCandidates() {
    return this.usersService.findCandidate();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
}
