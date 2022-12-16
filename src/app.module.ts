//O arquivo app.module.ts recebe todas as outras classes do projeto e funciona como uma "cola", unindo tudo o que é necessário para a aplicação funcionar. Ele utiliza o decorator @module para definir que a classe trabalhe como um módulo.

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from '../prisma/prisma.module'
import { PrismaService } from '../prisma/prisma.service'
import { UserModule } from './user/user.module'

@Module({
  imports: [PrismaModule, , UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
