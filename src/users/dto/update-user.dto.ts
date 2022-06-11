import { Optional } from "@nestjs/common";
import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto)  {
    @IsNotEmpty()
    id: number;
}
