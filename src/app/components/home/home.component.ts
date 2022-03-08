import { Component, OnInit } from '@angular/core';
import { switchMenuItem } from '../switch-menu/switch-menu-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  switchMenuItems: switchMenuItem[] = [
    {
      id: 'most-popular',
      name: 'Most Popular',
    },
    {
      id: 'now-playing',
      name: 'Now Playing',
    },
    {
      id: 'top-rated',
      name: 'Top Rated',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
