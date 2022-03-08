import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  imageSource: string = '';
  @Input() icon: string = '';

  ngOnInit() {
    if (!this.icon) { return; }
    this.imageSource = `assets/icons/${this.icon}.svg`;
    console.log(this.imageSource);
  }
}
