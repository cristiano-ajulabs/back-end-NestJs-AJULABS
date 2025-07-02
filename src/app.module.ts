import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'usuario',
      password: 'senha123',
      database: 'ktor_db',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
})

export class AppModule {}
