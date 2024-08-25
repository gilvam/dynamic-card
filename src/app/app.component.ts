import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardDisplayComponent } from './card-display/card-display.component';
import { mockCards } from '../../public/mock/config.mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  list = mockCards;

  getGridTemplateArea(area: string[]): string {
    return area.map(row => `"${ row }"`).join(' ');
  }

}
