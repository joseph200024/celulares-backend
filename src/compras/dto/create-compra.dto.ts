import { IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateCompraDto {
  @IsNotEmpty({ message: 'El campo direccion de envio no debe ser vacío' })
  readonly idCelular: number;
  @IsNotEmpty({ message: 'El campo direccion de envio no debe ser vacío' })
  @IsString({ message: 'El campo direccion de envio debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo direccion de envio no debe ser mayor a 45 caracteres',
  })
  readonly direccionEnvio: string;

  @IsNotEmpty({ message: 'El campo cantidad no debe ser vacío' })
  @Min(1, { message: 'El campo cantidad debe ser mayor que 0' })
  readonly cantidad: number;

  @IsNotEmpty({ message: 'El campo metodo de pago no debe ser vacío' })
  @IsString({ message: 'El campo metodo de pago debe ser de tipo cadena' })
  readonly metodoPago: string;
}
