import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Entrada{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo_entrada: string;

    @Column()
    valor: number;

    @Column()
    data: Date;

    @Column()
    name: string;

    @Column({nullable: true})
    tele: string

    @Column({nullable: true})
    descricao: string;
}