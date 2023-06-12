import { Component, Input } from '@angular/core';

@Component({
  selector: 'sevo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title!: string;
  @Input() body: boolean = true;
  @Input() footer: boolean = true;
}
