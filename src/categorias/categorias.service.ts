import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaDTO } from './dto/create-categoria';
import { UpdateCategoriaDTO } from './dto/upadate-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}
  async insertar(categoriaDTO: CreateCategoriaDTO) {
    const existe = await this.categoriaRepository.findOneBy({
      nombre: categoriaDTO.nombre,
    });

    if (existe) {
      throw new ConflictException(
        `La categoria con el nombre ${categoriaDTO.nombre} ya existe`,
      );
    }

    return await this.categoriaRepository.save({
      nombre: categoriaDTO.nombre,
      descripcion: categoriaDTO.descripcion,
    });
  }

  async obtener(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }
  async obtenerCategoriaID(idCelu: number) {
    return await this.categoriaRepository.findOneBy({
      id: idCelu,
    });
  }
  async actualizar(id: number, categoriaDTO: UpdateCategoriaDTO) {
    return await this.categoriaRepository.update(id, {
      nombre: categoriaDTO.nombre,
      descripcion: categoriaDTO.descripcion,
    });
  }
  async eliminar(id: number) {
    return await this.categoriaRepository.delete(id);
  }
}
