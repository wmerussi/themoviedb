import { Component, Input, OnInit } from '@angular/core';
import { switchMenuItem } from './switch-menu-item.interface';

@Component({
  selector: 'app-switch-menu',
  templateUrl: './switch-menu.component.html',
  styleUrls: ['./switch-menu.component.scss'],
})
export class SwitchMenuComponent implements OnInit {
  @Input() items: switchMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
