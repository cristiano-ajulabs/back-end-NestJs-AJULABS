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

}