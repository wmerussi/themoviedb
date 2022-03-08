import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() rating: number = 0;
}
