import {
    Controller,
    Post,
    Body,
    HttpCode,
    HttpStatus,
    Request,
    UseGuards,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
      return this.authService.validateUser(loginDto.username, loginDto.password);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post('profile')
    getProfile(@Request() req: any) {
      return req.user;
    }
  }
  