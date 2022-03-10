import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() fieldClass: string = '';
  @Input() icon: string = '';
  @Output() onKeyup: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  keyup(event: KeyboardEvent): void {
    this.onKeyup.emit(event);
  }
}
