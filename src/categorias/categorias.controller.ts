import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDTO } from './dto/create-categoria';
import { UpdateCelularDTO } from 'src/celulares/dto/update-celular.dto';

@Controller('categorias')
export class CategoriasController {
  //HACER CRUD DE CATEGORIAS, TOMANDO COMO EJEMPLO EL CONTROLLER DE USUARIOS O DE CELULAR
  //CREANDO LOS dtos CORRESPONDIENTES PARA INSERTAR UN COLOR NUEVO Y OTRO PARA ACTUALIZAR UN COLOR EXISTENTE MEDIANTE SU ID
  //CUANDO HAGAS EL SERVICIO ACUERDATE DE MIRAR EL CELULARES MODULE PARA PODER USAR EL REPOSITORIO DENTRO DEL SERVICIO
  constructor(private categoriasService: CategoriasService) {}
  @Post()
  //@Body mete el cuerpo de la peticion que tiene los campos nombre y descripcion dentro del DTO CreateCelularDTO
  insertarCelular(@Body() categoriaDTO: CreateCategoriaDTO) {
    return this.categoriasService.insertar(categoriaDTO);
  }
  @Get()
  obtenerTelefonos() {
    return this.categoriasService.obtener();
  }
  @Get(':id')
  //@Param('id') mete el valor de :id en la variable id  que es un numero
  obtenerCelular(@Param('id') id: number) {
    return this.categoriasService.obtenerCategoriaID(id);
  }
  @Patch(':id')
  actualizar(@Param('id') id: number, @Body() categoriaDTO: UpdateCelularDTO) {
    return this.categoriasService.actualizar(id, categoriaDTO);
  }
  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.categoriasService.eliminar(id);
  }
}
