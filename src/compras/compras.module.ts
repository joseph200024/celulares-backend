import { Module } from '@nestjs/common';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';
import { Compra } from './entities/compra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Celular } from 'src/celulares/entities/celular.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Compra]),
    TypeOrmModule.forFeature([Celular]),
  ],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}
