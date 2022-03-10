import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SwitchMenuItem } from './switch-menu-item.interface';

@Component({
  selector: 'app-switch-menu',
  templateUrl: './switch-menu.component.html',
  styleUrls: ['./switch-menu.component.scss'],
})
export class SwitchMenuComponent {
  active = 'most-popular';
  @Input() items: SwitchMenuItem[] = [];
  @Output() menuChange: EventEmitter<SwitchMenuItem> = new EventEmitter<SwitchMenuItem>();

  @Input() set activeItem(item: string) {
    this.active = item;
  }

  setActive(item: SwitchMenuItem) {
    this.active = item.id;
    this.menuChange.emit(item);
  }

  isActive(itemId: string): boolean {
    return itemId === this.active;
  }
}
