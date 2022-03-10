import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  src: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() rating: number = 0;

  @Input() set imageSrc(value: string) {
    this.src = value;
  };

  loadAltImage(): void {
    this.src = 'assets/images/cover.jpg';
  }
}
