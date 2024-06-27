import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateCompraDto } from './dto/create-compra.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('compras')
export class ComprasController {
  constructor(private comprasService: ComprasService) {}
  @Post()
  async insert(@Body() comprasDto: CreateCompraDto, @Req() req: { user: any }) {
    //HACER UN DTO QUE GUARDE EL ID DEL PRODUCTO A COMPRAR
    //Y PASARSELO A LA FUNCION DE INSERT DEL COMPRAS SERVICE
    return this.comprasService.insert(req.user, comprasDto);
  }

  @Get()
  obtenerCompras() {
    return this.comprasService.obtener();
  }
}
