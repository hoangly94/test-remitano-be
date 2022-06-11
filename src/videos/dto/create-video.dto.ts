import { IsNotEmpty } from "class-validator";

export class CreateVideoDto {
    @IsNotEmpty()
    src: string;
}
