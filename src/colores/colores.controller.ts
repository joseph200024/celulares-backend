import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColoresService } from './colores.service';
import { CreateColoresDTO } from './dto/create-colores';
import { UpdateColoresDTO } from './dto/update-colores.dto';

@Controller('colores')
export class ColoresController {
  //HACER CRUD DE COLORES, TOMANDO COMO EJEMPLO EL CONTROLLER DE USUARIOS O DE CELULAR
  //CREANDO LOS dtos CORRESPONDIENTES PARA INSERTAR UN COLOR NUEVO Y OTRO PARA ACTUALIZAR UN COLOR EXISTENTE MEDIANTE SU ID
  //CUANDO HAGAS EL SERVICIO ACUERDATE DE MIRAR EL Colores MODULE PARA PODER USAR EL REPOSITORIO DENTRO DEL SERVICIO
  constructor(private coloresService: ColoresService) {}
  @Post()
  insertarColores(@Body() colorDTO: CreateColoresDTO) {
    return this.coloresService.insertar(colorDTO);
  }

  @Get()
  obtenerColores() {
    return this.coloresService.obtener();
  }

  @Get(':id')
  obtenerColor(@Param('id') id: number) {
    return this.coloresService.obtenerColorID(id);
  }
  @Patch(':id')
  actualizar(@Param('id') id: number, @Body() updacolorDTO: UpdateColoresDTO) {
    return this.coloresService.actualizar(id, updacolorDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.coloresService.eliminar(id);
  }
}
