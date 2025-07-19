import { Injectable, Query } from "@nestjs/common";
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

    async getEntradasPorTipo(): Promise<{ tipo: string; total: number; }[]>{
        const query = this.entradaRepo
        .createQueryBuilder("entrada")
        .select('entrada.tipo_entrada', 'tipo')
        .addSelect('SUM(entrada.valor)', "total")
        .groupBy('entrada.tipo_entrada')

        return query.getRawMany();
    }


    async relatorio(nome: string, ano: string): Promise<Entrada[]> {
        const query = this.entradaRepo.createQueryBuilder('entrada');

        if (nome) {
            query.andWhere('entrada.name ILIKE :nome', {nome: `%${nome}`});
        }

        if (ano) {
            query.andWhere('EXTRACT(YEAR FROM entrada.data) = :ano', { ano: Number(ano) });
        }


        return query.orderBy('entrada.data', 'DESC').getMany();
    }

}
