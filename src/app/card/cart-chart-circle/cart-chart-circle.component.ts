import { Component, ElementRef, input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart-chart-circle',
  standalone: true,
  imports: [],
  templateUrl: './cart-chart-circle.component.html',
  styleUrl: './cart-chart-circle.component.scss'
})
export class CartChartCircleComponent {
  title = input<string>();
  description = input<string>();
}
