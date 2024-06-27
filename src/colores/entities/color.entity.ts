import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Celular } from 'src/celulares/entities/celular.entity'; // Asegúrate de que la ruta sea correcta

@Entity('colores')
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  nombre: string;

  @OneToMany(() => Celular, (celular) => celular.color)
  celulares: Celular[];
}
