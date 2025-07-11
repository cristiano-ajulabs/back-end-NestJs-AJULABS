import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Saida } from "./saida.entity";


@Injectable()
export class SaidaService {
    constructor(
        @InjectRepository(Saida)
        private saidaRepo: Repository<Saida>,
    ) { }


    async create(saida: Partial<Saida>) {
        const debito = this.saidaRepo.create(saida)
        return this.saidaRepo.save(debito);
    }
}