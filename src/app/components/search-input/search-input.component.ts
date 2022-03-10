import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchValue: string = '';

  @Input() hideButton: boolean = false;
  @Output() searchInputValueChange: EventEmitter<string> = new EventEmitter<string>();

  onKeyup(event: KeyboardEvent): void {
    this.searchValue = (<HTMLInputElement>event.target).value;

    if (event.key === 'Enter' || this.hideButton) {
      this.emitSearchValue();
    }
  }

  emitSearchValue(): void {
    this.searchInputValueChange.emit(this.searchValue);
  }
}
