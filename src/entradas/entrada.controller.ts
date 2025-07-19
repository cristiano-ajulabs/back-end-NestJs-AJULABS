import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { CreateEntradaDto } from "./dto/create-entrada.dto";
import { EntradaService } from "./entrada.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('entrada')
export class EntradaController {
    constructor(private readonly entradaService: EntradaService) { }

    @Post()
    criar(@Body() dados: CreateEntradaDto) {
        return this.entradaService.criar(dados);
    }

    @Get()
    listar() {
        return this.entradaService.listar();
    }

    @Get('total')
    async totalEntradas() {
        return this.entradaService.getTotalEntradas();
    }

    @Get('resumo')
    getResumoEntradas() {
        return this.entradaService.getEntradasPorTipo();
    }

    @Get('relatorio')
    async relatorio(
        @Query('nome') nome: string,
        @Query('ano') ano: string
    ) {
        return this.entradaService.relatorio(nome, ano);
    }

    
}