import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  src: string = '';
  @Input() name: string = '';

  ngOnInit(): void {
    this.src = `assets/icons/${this.name}.svg`;
  }
}
