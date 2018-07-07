import { FuncionarioService } from './../funcionario.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-aula-servico',
  templateUrl: './funcionario-aula-servico.component.html',
  styleUrls: ['./funcionario-aula-servico.component.css']
})
export class FuncionarioAulaServicoComponent {

  funcionarioService: FuncionarioService;

  constructor() {
   this.funcionarioService = new FuncionarioService();
}

  adicionar(nome: string) {
    this.funcionarioService.adicionar(nome);
  }

}