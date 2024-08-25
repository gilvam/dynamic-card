import { Component, input } from '@angular/core';
import { ColorUtil } from '../../../_shared/util/color.util';

@Component({
  selector: 'app-card-chart',
  standalone: true,
  imports: [],
  templateUrl: './card-chart.component.html',
  styleUrl: './card-chart.component.scss'
})
export class CardChartComponent {
  title = input<string>();
  description = input<string>();
  color = input<string>('#aaaaaa');

  chartList = [150, 100, 75, 50];

  pixel(value: number) {
    return `${ value }px`;
  }

  get background() {
    const darken = ColorUtil.hexadecimalToHslDarken(this.color(), 10);
    const lighten = `rgb(from ${ this.color() } r g b / 0.6)`;
    return `linear-gradient(0deg, ${ darken } 0%, ${ lighten } 100%)`;
  }
}
