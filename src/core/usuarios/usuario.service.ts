/*import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./entidades/usuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepo: Repository<Usuario>,
    ){}

    crearUsuario(usuario: Partial<Usuario>){
        const nuevoUsuario = this.usuarioRepo.create(usuario);
        return this.usuarioRepo.save(nuevoUsuario);
    }

    obtenerUsuario(){
        return this.usuarioRepo.find();
    }

    buscarUsuarioPorId(id: number){
        return this.usuarioRepo.findOneBy({ id });
    }

    actualizarUsuario(id: number, cambios: Partial<Usuario>){
        return this.usuarioRepo.update(id, cambios)
    }

    eliminarUsuario(id: number){
        return this.usuarioRepo.delete(id);

    }
}*/

import { HttpException, Injectable, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { encrypt } from '../../common/utils';
import { Usuario } from './entidades';
import { CreateUserDto, UpdateUserDto, ReadUserDto } from './dto';
import { response } from 'express';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly _userRepo: Repository<Usuario>
    ) {}

    async create(createUserDto: CreateUserDto){
        try{
            //validamos si existe el usuario
            const existeUsuario = await this._userRepo.findOne({
                where: [
                    { correo: createUserDto.correo },
                ],
            });

            if (existeUsuario !== null) {
                throw new HttpException(`El usuario ya esta registrado`, HttpStatus.CONFLICT);
            }

            createUserDto.contrasena = encrypt(createUserDto.contrasena);

            const record = this._userRepo.create(createUserDto);
            const response = await this._userRepo.save(record);

            return plainToInstance(ReadUserDto, response);
        }catch (error) {
            throw error;
        }
    }
}