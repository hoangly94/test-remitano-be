import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, In, Not, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    private connection: Connection
  ) { }

  async findByEmail(email: string) {
    return this.repo.findOne({
      email
    });
  }

  async create(createUserDto: CreateUserDto) {
    return this.repo.insert(createUserDto);
  }
  
}