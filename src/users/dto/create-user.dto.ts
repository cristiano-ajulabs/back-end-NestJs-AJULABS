import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    name: string;

    @IsEmail({}, { message: 'Email inválido'})
    email: string;

    @MinLength(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
    password: string;
}