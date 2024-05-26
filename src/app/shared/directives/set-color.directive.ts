import { Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetColor]',
})
export class SetColorDirective {
  renderer = inject(Renderer2);
  element = inject(ElementRef);

  @Input() set appSetColor(value: any) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      value
    );
  }
}
