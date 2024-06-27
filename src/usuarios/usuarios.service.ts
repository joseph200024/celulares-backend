import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsuariosDTO } from './dto/create-usuarios';
import { UpdateUsuariosDTO } from './dto/update-usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async insertar(usuariosDTO: CreateUsuariosDTO) {
    return await this.usuarioRepository.save({
      email: usuariosDTO.email,
      password: usuariosDTO.password,
    });
  }

  async obtener(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }
  async obtenerUsuarioID(idUsu: number) {
    return await this.usuarioRepository.findOneBy({
      id: idUsu,
    });
  }
  async actualizar(id: number, usuarioDTO: UpdateUsuariosDTO) {
    return await this.usuarioRepository.update(id, {
      email: usuarioDTO.email,
      password: usuarioDTO.password,
    });
  }
  async eliminar(id: number) {
    return await this.usuarioRepository.delete(id);
  }
}
