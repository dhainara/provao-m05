import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Utilizado no login. Deve ser único',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Email utilizado.',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  password: string;

  confirmPassword: string;
}