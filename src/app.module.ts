import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity'
import { AuthModule } from './auth/auth.module';

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
    AuthModule,
  ],
})

export class AppModule {}
