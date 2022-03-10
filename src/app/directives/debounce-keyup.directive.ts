import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[debounceKeyup]'
})
export class DebounceKeyupDirective implements OnInit, OnDestroy {
  @Output() debounceKeyup: EventEmitter<any> = new EventEmitter<any>();

  private strokes = new Subject();
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.strokes
      .pipe(debounceTime(250))
      .subscribe(e => this.debounceKeyup.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('window:keyup', ['$event'])
  keyupEvent(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.strokes.next(event);
  }
}
