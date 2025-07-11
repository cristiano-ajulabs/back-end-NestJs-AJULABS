import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Saida {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: Date;

    @Column()
    tipo: string;

    @Column()
    valor: number;

    @Column()
    beneficiario: string;

    @Column()
    descricao: string;

    @Column()
    observacao: string;
}