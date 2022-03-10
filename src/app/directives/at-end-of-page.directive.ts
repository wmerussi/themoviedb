import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[atEndOfThePage]',
  inputs: ['atEndOfThePage', 'ref'],
})
export class AtEndOfThePageDirective {
  @Input() atEndOfThePage: any;
  @Input() ref: any;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pos = window.pageYOffset + window.innerHeight;
    const max = this.el.nativeElement.clientHeight;

    if (pos === max)   {
      this.atEndOfThePage(this.ref);
    }
  }
}
