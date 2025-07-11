import { Module } from "@nestjs/common";
import { SaidaService } from "./saida.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Saida } from "./saida.entity";
import { saidaController } from "./saida.controller";



@Module({
    imports: [TypeOrmModule.forFeature([Saida])],
    controllers: [saidaController],
    providers: [SaidaService],
})

export class SaidaModule{}
