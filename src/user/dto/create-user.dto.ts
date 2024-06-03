import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsString, IsUUID } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { UUID, randomUUID } from "crypto";

export class CreateUserDto {
    @ApiProperty()
    @IsUUID()
    user_id: UUID = randomUUID();
    @ApiProperty()
    @IsEmail()
    user_email: string;
    @ApiProperty()
    @IsString()
    user_name: string;
    @ApiProperty()
    @IsString()
    user_password: string;
    
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}