import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardDisplayComponent } from './card-display/card-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  list2 = [
    {
      name: 'Users',
      cards: [
        { name: 'Card 1', component: 'app-card-simple', style: { gridArea: '1 / 1 / 1 / 1', color: '#5585b5', height: '150px' } },
        { name: 'Card 2', component: 'app-card-double', style: { gridArea: '1 / 2 / 1 / 2', color: '#53a8b6', height: '150px' } },
        { name: 'Card 3', component: 'app-card-table', style: { gridArea: '1 / 3 / 1 / 3', color: '#79c2d0', height: '150px' } },
      ]
    },
    {
      name: 'Oriented',
      cards: [
        { name: 'Card 1', component: 'app-card-double', style: { gridArea: '1 / 1 / 1 / 1', color: '#eea29a', height: '200px' } },
      ]
    },
    {
      name: 'Previously directed',
      cards: [
        { name: 'Card 1', component: 'app-card-simple', style: { gridArea: '1 / 1 / 1 / 4', color: '#b9936c', height: '' } },
        { name: 'Card 2', component: 'app-card-simple', style: { gridArea: '1 / 4 / 1 / 7', color: '#dac292', height: '' } },
        { name: 'Card 3', component: 'app-card-simple', style: { gridArea: '2 / 1 / 2 / 4', color: '#e6e2d3', height: '' } },
        { name: 'Card 4', component: 'app-card-simple', style: { gridArea: '2 / 4 / 2 / 7', color: '#c4b7a6', height: '' } },
        { name: 'Card 5', component: 'app-card-table', style: { gridArea: '1 / 7 / 3 / 9', color: '#b1cbbb', height: '500px' } },
      ]
    }
  ];

  list = [
    {
      name: 'Users',
      gridTemplateArea: ['A B C'],
      cards: [
        { id: 'A', name: 'Card 1', component: 'app-card-simple', style: { color: '#5585b5', height: '150px' } },
        { id: 'B', name: 'Card 2', component: 'app-card-double', style: { color: '#53a8b6', height: '150px' } },
        { id: 'C', name: 'Card 3', component: 'app-card-table', style: { color: '#79c2d0', height: '150px' } },
      ]
    },
    {
      name: 'Oriented',
      gridTemplateArea: ['A'],
      cards: [
        { id: 'A', name: 'Card 1', component: 'app-card-double', style: { color: '#eea29a', height: '200px' } },
      ]
    },
    {
      name: 'Previously directed',
      gridTemplateArea: [
        'A A A B B B E E',
        'C C C D D D E E'
      ],
      cards: [
        { id: 'A', name: 'Card 1', component: 'app-card-simple', style: { color: '#9CA986', height: '' } },
        { id: 'B', name: 'Card 2', component: 'app-card-simple', style: { color: '#96C291', height: '' } },
        { id: 'C', name: 'Card 3', component: 'app-card-simple', style: { color: '#5B9A8B', height: '' } },
        { id: 'D', name: 'Card 4', component: 'app-card-simple', style: { color: '#81A263', height: '' } },
        { id: 'E', name: 'Card 5', component: 'app-card-table', style: { color: '#73BBA3', height: '500px' } },
      ]
    }
  ];

  getGridTemplateArea(area: string[]): string {
    return area.map(row => `"${row}"`).join(' ');
  }

}
