import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = "yellow";
  constructor(private elementRef: ElementRef) { }

  @HostListener("mouseenter") addHightlight(){
    this.handleHightlignt(this.color);
  }

  @HostListener("mouseleave") removeHightlight(){
    this.handleHightlignt(null);
  }

  handleHightlignt(color){
    this.elementRef.nativeElement.style.background = color;
  }

}
