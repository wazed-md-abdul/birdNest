import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


export class CreateUserDto {
    @IsOptional()
    @IsNumber()
    id: number

    @IsNotEmpty({ message: 'Name is required' })
    @IsString({ message: 'Name must be a string' })
    name: string

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail()
    email: string
}