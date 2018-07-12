import { FuncionarioService } from './funcionario.service';

import { FuncionarioAulaServicoComponent } from './funcionario-aula-servico/funcionario-aula-servico.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
   ],
  declarations: [
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    FuncionarioAulaServicoComponent,
  ],
  exports: [
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    FuncionarioAulaServicoComponent
  ],
  providers: [FuncionarioService]

})
export class FuncionarioModule { }
