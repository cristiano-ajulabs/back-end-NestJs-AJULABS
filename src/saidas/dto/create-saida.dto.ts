import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";




export class CreateSaidaDto {
    @IsOptional()
    id: number
    @IsDateString()
    @IsNotEmpty()
    data: Date;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsNumber()
    @IsNotEmpty()
    valor: number;

    @IsString()
    @IsNotEmpty()
    beneficiario: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsString()
    @IsNotEmpty()
    observacao: string;
}