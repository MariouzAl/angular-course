import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[t3pgHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input()
  t3pgHighlight:string ='';
  
    constructor(private el: ElementRef) {
    this.el.nativeElement.style.display = 'block';
  }

  ngOnInit() {
    const label = this.el.nativeElement.querySelector('.label');
    label.style.backgroundColor = 'transparent';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.t3pgHighlight)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('')
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



}
