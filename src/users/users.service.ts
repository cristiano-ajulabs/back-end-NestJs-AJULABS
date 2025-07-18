import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findByEmail(email: string): Promise<User | null> {
        return this.usersRepository.findOne({
            where: { email },
        });
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id: string): Promise<User> {
        const user = await this.usersRepository.findOneBy({ id })

        if (!user) {
            throw new NotFoundException(`Usuário com ID ${id} não encontrado`)
        }
        return user;
    }



    async create(userData: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const newUser = this.usersRepository.create({
            name: userData.name,
            email: userData.email,
            passwordHash: hashedPassword,
        });

        return this.usersRepository.save(newUser);
    }

    async update(id: string, userData: UpdateUserDto): Promise<User> {
        await this.usersRepository.update(id, userData);

        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
