import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

    @Input('appCampoColorido') cor = 'gray';

   @HostBinding('style.backgroundColor') corDeFundo: string;

   @HostListener('focus') aoGanharFoco() {
    this.corDeFundo = this.cor;
   }

   @HostListener('blur') aoPerderFoco() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'yellow');
    this.corDeFundo = 'transparent';
   }

}
