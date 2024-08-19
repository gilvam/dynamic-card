import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-simple',
  standalone: true,
  imports: [],
  templateUrl: './card-simple.component.html',
  styleUrl: './card-simple.component.scss'
})
export class CardSimpleComponent {
  title = input<string>();
}
