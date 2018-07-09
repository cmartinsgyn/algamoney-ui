import { FuncionarioService, FuncionarioAbreviadoService } from './funcionario.service';
import { BotoesModule } from './botoes/botoes.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FuncionarioAulaServicoComponent } from './funcionario-aula-servico/funcionario-aula-servico.component';


const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(5);
};


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    FuncionarioAulaServicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule
  ],
  providers: [
    { provide: FuncionarioService, useFactory: criarFuncionarioService }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // provide: FuncionarioService, useClass: FuncionarioAbreviadoService

 }
