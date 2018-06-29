import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective implements OnInit {

  constructor(private render: Renderer2, private ele: ElementRef) { }
  ngOnInit() {
      // this.render.addClass(this.ele.nativeElement, 'card');
  }

  @HostListener('mouseenter') onEnter() {
    this.render.addClass(this.ele.nativeElement, 'card');
  }
  @HostListener('mouseleave') onLeave() {
    this.render.removeClass(this.ele.nativeElement, 'card');
  }
}
