import { Exclude} from 'class-transformer';

export class ReadUserDto{
    id_usuario: number;

    nombre: string;

    correo: string;

    @Exclude()
    contrasena: string;


}