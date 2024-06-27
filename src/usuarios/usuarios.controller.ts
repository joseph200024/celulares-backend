import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { CreateUsuariosDTO } from './dto/create-usuarios';
import { UpdateUsuariosDTO } from './dto/update-usuarios.dto';
@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuariosService) {}
  @Post()
  insertarUsuario(@Body() usuariosDTO: CreateUsuariosDTO) {
    return this.usuarioService.insertar(usuariosDTO);
  }
  @Get()
  obtenerUsuarios() {
    return this.usuarioService.obtener();
  }
  @Get(':id')
  obtenerUsuario(@Param('id') id: number) {
    return this.usuarioService.obtenerUsuarioID(id);
  }
  @Patch(':id')
  actualizar(@Param('id') id: number, @Body() usuarioDTO: UpdateUsuariosDTO) {
    return this.usuarioService.actualizar(id, usuarioDTO);
  }
  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.usuarioService.eliminar(id);
  }
}
