import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('v1/users')
export class UsersController {
  constructor(private readonly service: UsersService) { }

  @Post('/')
  async CreateUserWithCommittee(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }
}

