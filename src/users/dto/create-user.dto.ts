import { Optional } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}
