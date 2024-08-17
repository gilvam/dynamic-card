import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardSimpleComponent } from './card/card-simple/card-simple.component';
import { CardDoubleComponent } from './card/card-double/card-double.component';
import { CardTableComponent } from './card/card-table/card-table.component';
import { CardDisplayComponent } from './card-display/card-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  list = [
    {
      name: 'Users',
      cards: [
        { name: 'Card 1', component: CardSimpleComponent, style: { gridArea: '1 / 1 / 1 / 1', color: '#5585b5', height: '200px' } },
        { name: 'Card 2', component: CardDoubleComponent, style: { gridArea: '1 / 2 / 1 / 2', color: '#53a8b6', height: '200px' } },
        { name: 'Card 3', component: CardTableComponent, style: { gridArea: '1 / 3 / 1 / 3', color: '#79c2d0', height: '200px' } },
      ]
    },
    {
      name: 'Oriented',
      cards: [
        { name: 'Card 1', component: CardSimpleComponent, style: { gridArea: '1 / 1 / 1 / 1', color: '#eea29a', height: '200px' } },
      ]
    },
    {
      name: 'Previously directed',
      cards: [
        { name: 'Card 1', component: CardSimpleComponent, style: { gridArea: '1 / 1 / 1 / 4', color: '#b9936c', height: '' } },
        { name: 'Card 2', component: CardSimpleComponent, style: { gridArea: '1 / 4 / 1 / 7', color: '#dac292', height: '' } },
        { name: 'Card 3', component: CardSimpleComponent, style: { gridArea: '2 / 1 / 2 / 4', color: '#e6e2d3', height: '' } },
        { name: 'Card 4', component: CardSimpleComponent, style: { gridArea: '2 / 4 / 2 / 7', color: '#c4b7a6', height: '' } },
        { name: 'Card 5', component: CardTableComponent, style: { gridArea: '1 / 7 / 3 / 9', color: '#b1cbbb', height: '500px' } },
      ]
    }
  ];
}
