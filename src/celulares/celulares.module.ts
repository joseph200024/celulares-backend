import { Module } from '@nestjs/common';
import { CelularesService } from './celulares.service';
import { CelularesController } from './celulares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Celular } from './entities/celular.entity';
import { Color } from 'src/colores/entities/color.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Celular]),
    TypeOrmModule.forFeature([Color]),
    TypeOrmModule.forFeature([Categoria]),
  ],
  controllers: [CelularesController],
  providers: [CelularesService],
})
export class CelularesModule {}
