import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateCategoriaDTO {
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo nombre no debe ser mayor a 45 caracteres',
  })
  @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
  readonly nombre: string;

  @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
  @MinLength(10, {
    message: 'El campo descripcion no debe ser menor a 5 caracteres',
  })
  readonly descripcion: string;
}
