import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';
import { Connection } from 'typeorm';
// import { EXISTED_EMAIL, INVALID_CREDENTIALS } from '../http-message';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private connection: Connection,
  ) { }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.usersService.findByEmail(loginAuthDto.email);
    if (!user) {
      //random delay response time in range 0-1.5s to prevent hackers guessing email exists or not 
      await new Promise(r => setTimeout(r, (Math.random() * 15) * 100));
      throw new BadRequestException();
      // throw new BadRequestException(INVALID_CREDENTIALS);
    }
    const { password, ...payload } = user;
    return {
      access_token: this.jwtService.sign(payload),
      expired: process.env.ACCESS_TOKEN_EXPIRATION,
      ...payload,
    };
  }
}
