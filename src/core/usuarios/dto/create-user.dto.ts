import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    
    id_usuario: number;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    correo: string;

    @IsNotEmpty()
    contrasena: string;

    status: boolean;
}