import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreateCompraDto } from './dto/create-compra.dto';
import { Celular } from 'src/celulares/entities/celular.entity';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
    @InjectRepository(Celular)
    private celularRepository: Repository<Celular>,
  ) {}

  async insert(usuario: Usuario, createCompraDto: CreateCompraDto) {
    //usando el celularRepository buscar el celular por su id y guardarlo en una variable
    const celular = await this.celularRepository.findOneBy({
      id: createCompraDto.idCelular,
    });

    if (celular.stock == 0 || celular.stock - createCompraDto.cantidad < 0) {
      return {
        message: `No hay mas stock para el celular ${celular.nombre}`,
      };
    }

    await this.celularRepository.update(createCompraDto.idCelular, {
      stock: celular.stock - createCompraDto.cantidad,
    });

    //INSERTAR LA COMPRA
    await this.compraRepository.save({
      direccionEnvio: createCompraDto.direccionEnvio,
      total: celular.precio * createCompraDto.cantidad,
      usuario: usuario,
      celular: celular,
      cantidad: createCompraDto.cantidad,
      metodoPago: createCompraDto.metodoPago,
    });
  }

  async obtener() {
    return await this.compraRepository
      .createQueryBuilder('compra')
      .innerJoinAndSelect('compra.usuario', 'usuario')
      .innerJoinAndSelect('compra.celular', 'celular')
      .select([
        'compra.direccionEnvio AS direccionEnvio',
        'compra.total AS total',
        'compra.cantidad AS cantidad',
        'compra.metodoPago AS metodoPago',
        'usuario.email AS usuario',
        'celular.nombre AS celular',
      ])
      .getRawMany();
  }
}
