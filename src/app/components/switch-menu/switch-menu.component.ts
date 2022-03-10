import { Component, Input, OnInit } from '@angular/core';
import { SwitchMenuItem } from './switch-menu-item.interface';

@Component({
  selector: 'app-switch-menu',
  templateUrl: './switch-menu.component.html',
  styleUrls: ['./switch-menu.component.scss'],
})
export class SwitchMenuComponent implements OnInit {
  active = 'most-popular';
  @Input() items: SwitchMenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  setActive(itemId: string) {
    this.active = itemId;
  }

  isActive(itemId: string): boolean {
    return itemId === this.active;
  }
}
