import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUsuariosDTO {
  @IsString({ message: 'El campo email debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo email no debe ser mayor a 45 caracteres',
  })
  @MinLength(2, { message: 'El campo email no debe ser menor a 2 caracteres' })
  readonly email: string;

  @IsString({ message: 'El campo password debe ser de tipo cadena' })
  @MinLength(2, {
    message: 'El campo password no debe ser menor a 2 caracteres',
  })
  readonly password: string;
}
