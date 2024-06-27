import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Celular } from 'src/celulares/entities/celular.entity'; // Asegúrate de que la ruta sea correcta

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  nombre: string;

  @Column('text')
  descripcion: string;

  @OneToMany(() => Celular, (celular) => celular.categoria)
  celulares: Celular[];
}
