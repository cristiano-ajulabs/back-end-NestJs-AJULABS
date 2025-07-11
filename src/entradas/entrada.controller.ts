import { Body, Controller, Post } from "@nestjs/common";
import { CreateEntradaDto } from "./dto/create-entrada.dto";
import { EntradaService } from "./entrada.service";

@Controller('entrada')
export class EntradaController {
    constructor(private readonly entradaService: EntradaService) { }

    @Post()
    criar(@Body() dados: CreateEntradaDto) {
        return this.entradaService.criar(dados);
    }
}