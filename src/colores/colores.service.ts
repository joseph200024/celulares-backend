import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './entities/color.entity';
import { CreateColoresDTO } from './dto/create-colores';
import { UpdateCelularDTO } from 'src/celulares/dto/update-celular.dto';
import { UpdateColoresDTO } from './dto/update-colores.dto';

@Injectable()
export class ColoresService {
  constructor(
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
  ) {}
  async insertar(colorDTO: CreateColoresDTO) {
    const existe = await this.colorRepository.findOneBy({
      nombre: colorDTO.nombre,
    });
    if (existe) {
      throw new ConflictException(
        `El celular con el nombre ${colorDTO.nombre} ya existe`,
      );
    }
    return await this.colorRepository.save({
      nombre: colorDTO.nombre,
    });
  }
  async obtener(): Promise<Color[]> {
    return await this.colorRepository.find();
  }

  async obtenerColorID(idColor: number) {
    return await this.colorRepository.findOneBy({
      id: idColor,
    });
  }

  async actualizar(id: number, colorDTO: UpdateColoresDTO) {
    return await this.colorRepository.update(id, {
      nombre: colorDTO.nombre,
    });
  }

  async eliminar(id: number) {
    return await this.colorRepository.delete(id);
  }
}
