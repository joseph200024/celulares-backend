import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CelularesService } from './celulares.service';
import { CreateCelularDTO } from './dto/create-celular';
import { UpdateCelularDTO } from './dto/update-celular.dto';

@Controller('celulares')
export class CelularesController {
  constructor(private celularesService: CelularesService) {}

  @Post()
  //@Body mete el cuerpo de la peticion que tiene los campos nombre y descripcion dentro del DTO CreateCelularDTO
  insertarCelular(@Body() celularDTO: CreateCelularDTO) {
    return this.celularesService.insertar(celularDTO);
  }
  @Get()
  obtenerTelefonos() {
    return this.celularesService.obtener();
  }
  @Get(':id')
  //@Param('id') mete el valor de :id en la variable id  que es un numero
  obtenerCelular(@Param('id') id: number) {
    return this.celularesService.obtenrCelularID(id);
  }
  @Patch(':id')
  actualizar(@Param('id') id: number, @Body() celularDTO: UpdateCelularDTO) {
    return this.celularesService.actualizar(id, celularDTO);
  }
  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.celularesService.eliminar(id);
  }
}
