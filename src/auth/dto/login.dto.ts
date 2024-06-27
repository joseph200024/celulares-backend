import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  //
  @IsNotEmpty({ message: 'El email  no debe ser vacío' })
  @IsString({ message: 'El email  debe ser de tipo cadena' })
  //reandlo significa solo lectura
  readonly email: string;
  @IsNotEmpty({ message: 'El password  no debe ser vacío' })
  @IsString({ message: 'El  password debe ser de tipo cadena' })
  readonly password: string;
}
