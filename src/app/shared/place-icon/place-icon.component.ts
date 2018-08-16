import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ta-place-icon',
  templateUrl: './place-icon.component.html',
  styleUrls: ['./place-icon.component.scss']
})
export class PlaceIconComponent {
  @Input() category: string;

  @HostBinding('class') get categoryName(): string {
    return this.category;
  }
}
