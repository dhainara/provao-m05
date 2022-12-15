//O service é quem provê o conteúdo e acessa o banco de dados, qualquer informação vem dele. Diferente dos outros arquivos, esse receberá o decorator @injectable. A ideia é que qualquer classe que forneça uma informação receberá esse decorator.

import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! 🚀\n Please check http://localhost:3333/api for Swagger docs...';
  }
}
