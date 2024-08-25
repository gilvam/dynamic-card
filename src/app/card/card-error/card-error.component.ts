import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-error',
  standalone: true,
  imports: [],
  templateUrl: './card-error.component.html',
  styleUrl: './card-error.component.scss'
})
export class CardErrorComponent {
  card = input<string>();
  backGround = input<string>();
}
