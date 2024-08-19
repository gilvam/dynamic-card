import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-table',
  standalone: true,
  imports: [],
  templateUrl: './card-table.component.html',
  styleUrl: './card-table.component.scss'
})
export class CardTableComponent {
  title = input<string>();
  description = input<string>();
}
