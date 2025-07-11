import { Body, Controller, Post } from "@nestjs/common";
import { SaidaService } from "./saida.service";
import { CreateSaidaDto } from "./dto/create-saida.dto";



@Controller('saida')
export class saidaController{
    constructor( private readonly saidaService: SaidaService  ){}

    @Post()
    create(@Body() dados: CreateSaidaDto ) {
        return this.saidaService.create(dados)
    }
}