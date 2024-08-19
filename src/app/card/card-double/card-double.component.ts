import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-double',
  standalone: true,
  imports: [],
  templateUrl: './card-double.component.html',
  styleUrl: './card-double.component.scss'
})
export class CardDoubleComponent {
  title = input<string>();
  titleSecond = input<string>();
}
