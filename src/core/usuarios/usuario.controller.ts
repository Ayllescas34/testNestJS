import { Controller, Post, Get, Put, Delete, Param, Body  } from "@nestjs/common"; 
import { UsuarioService } from "./usuario.service"
import { CreateUserDto, ReadUserDto } from "./dto";
import { ApiBadRequestResponse, ApiForbiddenResponse, ApiFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
/*
@Controller('usuarios')
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){}

    @Post()
    crearUsuario(@Body() datos: Partial<Usuario>){
        return this.usuarioService.crearUsuario(datos);
    }

    /*
    @Get()
    obtenerUsuario(){
        return this.usuarioService.obtenerUsuario();
    }

    @Get(':id')
    buscarUsuarioPorId(@Param('id') id: string){
        return this.usuarioService.buscarUsuarioPorId(Number(id));
    }

    @Put(':id')
    actualizarUsuario(@Param('id') id: string, @Body() cambios: Partial<Usuario>){
        return this.usuarioService.actualizarUsuario(Number(id), cambios);
    }

    @Delete(':id')
    eliminarUsuario(@Param('id') id: string){
        return this.usuarioService.eliminarUsuario(Number(id));

    }
}*/

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuarioController {

    constructor(private readonly userService: UsuarioService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
}