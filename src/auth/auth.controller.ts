import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto.ts';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/user-user.decorator';
import { User } from './entities/user.entity';
import { RawHeaders } from '../common/decorators/get-raw-headers.decorator';
import { UserRoleGuard } from './guards/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles.interface';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @GetUser('id') user: User,
    @RawHeaders() rawHeaders: string[],
  ) {
    return { user, rawHeaders };
  }

  @Get('private2')
  // @SetMetadata('roles', ['admin', 'super-admin'])
  @RoleProtected(ValidRoles.superAdmin, ValidRoles.user)
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute2(@GetUser() user: User) {
    return { user };
  }

  @Get('private3')
  @Auth(ValidRoles.superAdmin, ValidRoles.user)
  privateRoute3(@GetUser() user: User) {
    return { user };
  }
}
