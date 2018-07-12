import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
  .card-block {
      text-transform: uppercase;
      color: blue;
  }

  `]
})
export class FuncionarioCardComponent  {

// tslint:disable-next-line:no-input-rename
@Input('func') funcionarioCard: any;

isAdmin() {
  return this.funcionarioCard.nome.startsWith('T');
}


getEstilosCartao() {
  return {
    borderWidth: this.funcionarioCard.id  + 'px',
    backgroundColor: this.funcionarioCard.id % 2 === 0 ? 'whrite' : 'green'
   };
 }

}
