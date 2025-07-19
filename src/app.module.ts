import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity'
import { AuthModule } from './auth/auth.module';
import { EntradaModule } from './entradas/entrada.module';
import { Entrada } from './entradas/entrada.entity';
import { Saida } from './saidas/saida.entity';
import { SaidaModule } from './saidas/saida.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest-db',
      entities: [User, Entrada, Saida],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    EntradaModule,
    SaidaModule,
  ],
})

export class AppModule {}
