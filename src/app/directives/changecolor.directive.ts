import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appChangecolor]'
})
export class ChangecolorDirective implements OnInit {
    constructor(private ele: ElementRef) {}

    ngOnInit() {
        this.ele.nativeElement.style.color = 'red';
    }
}
