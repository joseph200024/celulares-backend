import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createHash } from 'crypto';
import { JwtDto } from './dto/jwt.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async login(loginDto: LoginDto) {
    const user = await this.usuarioRepository.findOneBy({
      email: loginDto.email,
    });
    //si no existe el usuario devolvemos una excepcion
    if (!user) throw new ForbiddenException('credenciales incorrectas');

    //si el password es incorrecto devolvemos una excepcion
    if (user.password != loginDto.password)
      throw new ForbiddenException('credenciales incorrectas');

    return this.signToken(user.id, user.email);
  }

  async signToken(userId: number, email: string): Promise<JwtDto> {
    const payload = {
      id: userId,
      email: email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '3hours',
      secret: this.config.get('JWT_SECRET'),
    });

    const jwtDto: JwtDto = {
      access_token: token,
    };

    return jwtDto;
  }
}
