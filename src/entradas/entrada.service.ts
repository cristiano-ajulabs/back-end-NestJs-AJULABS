import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entrada } from "./entrada.entity";
import { Repository } from "typeorm";


@Injectable()
export class EntradaService {
    constructor(
        @InjectRepository(Entrada)
        private entradaRepo: Repository<Entrada>,
    ) { }

    async criar(entrada: Partial<Entrada>) {
        const nova = this.entradaRepo.create(entrada)
        return this.entradaRepo.save(nova);
    }

    async listar() {
        return this.entradaRepo.find({
            order: { data: 'DESC'}
        })
    }

    async getTotalEntradas(): Promise<number> {
        const resultado = await this.entradaRepo
            .createQueryBuilder("entrada")
            .select("SUM(entrada.valor)", "total")
            .getRawOne();

        return Number(resultado.total) || 0;    
    }

}