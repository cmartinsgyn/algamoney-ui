import { FuncionarioModule } from './funcionario/funcionario.module';
import { BotoesModule } from './botoes/botoes.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppComponent } from './app.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FuncionarioService } from './funcionario/funcionario.service';
import { LogService } from './log.service';


// const criarFuncionarioService = () => {
//   return new FuncionarioAbreviadoService(5);
// };


@NgModule({
  declarations: [
    AppComponent,
    CampoColoridoDirective,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    FuncionarioModule
  ],
  providers: [
     LogService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

 // provide: FuncionarioService, useClass: FuncionarioAbreviadoService
//  provide: FuncionarioService, useFactory: criarFuncionarioService
// FuncionarioService,
//      LogService, { provide: 'LogPrefixo', useValue: 'LOG'}

