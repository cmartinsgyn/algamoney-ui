import { Directive, HostListener, HostBinding, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

//  constructor(
//     private elementRef: ElementRef,
//     private renderer: Renderer2
//   ) {}

   @Input('appCampoColorido') cor = 'gray';

   @HostBinding('style.backgroundColor') corDeFundo: string;

   @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
   }

   @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'yellow');

   }

}
