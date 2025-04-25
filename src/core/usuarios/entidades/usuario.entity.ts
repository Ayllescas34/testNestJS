/*import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'varchar', length: 150, unique: true})
    correo: string;

    @Column({ type: 'varchar', length: 75})
    contrasena: string;

    @Column({ default: true })
    status: boolean;
}*/

import { Entity, CreateDateColumn, Column, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as moment from "moment";
import { ApiProperty } from "@nestjs/swagger";


@Entity('usuarios')
export class Usuario {
    @ApiProperty()
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id_usuario',
        comment: 'Id de usuario'
    })
    id_usuario: number;

    @ApiProperty()
    @Column({
        nullable: false,
        unique: true,
        type: 'varchar',
        length: '100',
        comment: 'Nombre de usuario'
    })
    nombre: string;

    @ApiProperty()
    @Column({
        nullable: false,
        unique: true,
        type: 'varchar',
        length: '150',
        comment: 'Correo de usuario'
    })
    correo: string;

    @ApiProperty()
    @Column({
        nullable: false,
        type: 'varchar',
        length: '75',
        comment: 'Contraseña de usuario'
    })
    contrasena: string;

    @ApiProperty()
    @Column({
        nullable: false,
        type: 'boolean',
        default: true,
        comment: 'Estado de usuario'
    })
    status: boolean;
}
