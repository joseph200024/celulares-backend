import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Color } from 'src/colores/entities/color.entity';
import { Compra } from 'src/compras/entities/compra.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('celulares')
export class Celular {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column('varchar', { length: 100, nullable: false })
  marca: string;

  @Column('varchar', { length: 100, nullable: false })
  modelo: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @Column('int', { nullable: false })
  stock: number;

  @ManyToOne(() => Color, (color) => color.celulares)
  color: Color;

  @ManyToOne(() => Categoria, (categoria) => categoria.celulares)
  categoria: Categoria;

  @OneToMany(() => Compra, (compra) => compra.celular) // Relación One-to-Many con Compra
  compras: Compra[];
}
