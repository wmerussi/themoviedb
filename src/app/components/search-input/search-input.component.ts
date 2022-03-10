import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchValue: string = '';
  @Output() searchInputValueChange: EventEmitter<string> = new EventEmitter<string>();

  onKeyup(event: KeyboardEvent): void {
    this.searchValue = (<HTMLInputElement>event.target).value;

    if (event.key === 'Enter') {
      this.emitSearchValue();
    }
  }

  emitSearchValue(): void {
    this.searchInputValueChange.emit(this.searchValue);
  }
}
