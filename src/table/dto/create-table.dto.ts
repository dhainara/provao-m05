
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
    IsNumber,
    IsPositive,
    IsString,
    IsFQDN
} from 'class-validator'


export class CreateTableDto {
    @IsString()
    @ApiProperty({
    description: 'O titulo do anime é: ',
    example: 'Naruto',
     })
    title: string;

    @IsString()
    coverImageUrl: string;

    @IsString()
    description: string;

    @IsString()
    year: string;

    @IsString()
    imdbScore: string;

    @IsString()
    trailerYoutubeUrl: string;
}