import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCardBorder]',
  standalone: true
})
export class CardBorderDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.defaultColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`; 
  }

}
