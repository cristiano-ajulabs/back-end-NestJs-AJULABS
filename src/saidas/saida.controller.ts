import { Body, Controller, Post, Get, UseGuards } from "@nestjs/common";
import { SaidaService } from "./saida.service";
import { CreateSaidaDto } from "./dto/create-saida.dto";
import { AuthGuard } from "@nestjs/passport";



@Controller('saida')
export class saidaController{
    constructor( private readonly saidaService: SaidaService  ){}

    @Post()
    create(@Body() dados: CreateSaidaDto ) {
        return this.saidaService.create(dados)
    }

    @Get()
    listar() {
        return this.saidaService.listar();
    }


    @Get('total')
    async totalSaidas() {
        return this.saidaService.getTotalSaidas();
    }

    @Get('resumo')
    async getSaidasPorTipo() {
        return this.saidaService.getSaidasPorTipo();
    }
}