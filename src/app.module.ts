//O arquivo app.module.ts recebe todas as outras classes do projeto e funciona como uma "cola", unindo tudo o que é necessário para a aplicação funcionar. Ele utiliza o decorator @module para definir que a classe trabalhe como um módulo.

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from './table/table.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [TableModule, PrismaModule, ProductModule, UserModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
