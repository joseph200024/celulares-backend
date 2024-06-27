import { Celular } from 'src/celulares/entities/celular.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { name: 'direccion_envio', nullable: false })
  direccionEnvio: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  total: number;

  @CreateDateColumn({ name: 'fecha_venta' })
  fechaVenta: Date;

  @Column('int', { name: 'cantidad', nullable: false })
  cantidad: number;

  @Column('text', { name: 'metodo_pago', nullable: false })
  metodoPago: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: Usuario;

  @ManyToOne(() => Celular, (celular) => celular.compras)
  @JoinColumn({ name: 'id_celular', referencedColumnName: 'id' })
  celular: Celular;
}
