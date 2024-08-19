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
  list = [
    {
      name: 'Users',
      gridTemplateArea: ['A B C'],
      cards: [
        {
          id: 'A',
          component: 'app-card-simple',
          inputs: { title: 'Card 1' },
          style: { color: '#5585b5', height: '150px' }
        },
        {
          id: 'B',
          component: 'app-card-double',
          inputs: { title: 'Card 2' },
          style: { color: '#53a8b6', height: '150px' }
        },
        {
          id: 'C',
          component: '?',
          inputs: { title: 'Card 3' },
          style: { color: '#79c2d0', height: '150px' }
        },
      ]
    },
    {
      name: 'Oriented',
      gridTemplateArea: ['A'],
      cards: [
        {
          id: 'A',
          component: 'app-card-double',
          inputs: { title: 'Card 1', titleSecond: 'Second title' },
          style: { color: '#eea29a', height: '200px' }
        },
      ]
    },
    {
      name: 'Previously directed',
      gridTemplateArea: [
        'A A A B B B E E',
        'C C C D D D E E'
      ],
      cards: [
        {
          id: 'A',
          component: 'app-card-simple',
          inputs: { title: 'Card 1' },
          style: { color: '#9CA986', height: '' }
        },
        {
          id: 'B',
          component: 'app-card-simple',
          inputs: { title: 'Card 2' },
          style: { color: '#96C291', height: '' }
        },
        {
          id: 'C',
          component: 'app-card-simple',
          inputs: { title: 'Card 3' },
          style: { color: '#5B9A8B', height: '' }
        },
        {
          id: 'D',
          component: 'app-card-simple',
          inputs: { title: 'Card 4' },
          style: { color: '#81A263', height: '' }
        },
        {
          id: 'E',
          component: 'app-card-table',
          inputs: { title: 'Card 5', description: 'description' },
          style: { color: '#73BBA3', height: '400px' }
        },
      ]
    }
  ];

  getGridTemplateArea(area: string[]): string {
    return area.map(row => `"${ row }"`).join(' ');
  }

}
