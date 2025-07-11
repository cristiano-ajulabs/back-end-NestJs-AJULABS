import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateEntradaDto {


    @IsString()
    @IsNotEmpty()
    tipo_entrada: string;

    @IsNumber()
    @IsNotEmpty()
    valor: number;

    @IsDateString()
    @IsNotEmpty()
    data: Date;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    tele: string

    @IsString()
    @IsOptional()
    descricao: string;
}