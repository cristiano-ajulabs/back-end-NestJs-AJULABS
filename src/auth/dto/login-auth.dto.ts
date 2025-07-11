import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginAuthDto {
    @IsEmail({}, { message: 'Email inválido'})
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    email: string;

    @IsNotEmpty({ message: 'A senha é obrigatória'})
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres'})
    password: string;
}