import { Component, input, Type } from '@angular/core';
import { CardSimpleComponent } from '../card/card-simple/card-simple.component';
import { CardDoubleComponent } from '../card/card-double/card-double.component';
import { CardTableComponent } from '../card/card-table/card-table.component';
import { NgComponentOutlet } from '@angular/common';
import { ObjectUtil } from '../../_shared/util/object.util';
import { CardErrorComponent } from '../card/card-error/card-error.component';
import { ColorUtil } from '../../_shared/util/color.util';
import { CardChartComponent } from '../card/card-chart/card-chart.component';
import { CartChartCircleComponent } from '../card/cart-chart-circle/cart-chart-circle.component';
import { ICard } from '../_shared/model/card.interface';

@Component({
  selector: 'app-card-render',
  standalone: true,
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './card-render.component.html',
  styleUrls: ['./card-render.component.scss']
})
export class CardRenderComponent {
  card = input.required<ICard>();

  private componentSelected!: Type<any>;
  private componentsMap: { [key: string]: any } = {
    'card-simple': CardSimpleComponent,
    'card-double': CardDoubleComponent,
    'card-table': CardTableComponent,
    'card-chart': CardChartComponent,
    'card-chart-circle': CartChartCircleComponent,
  };

  get background(): string {
    const darken = ColorUtil.hexadecimalToHslDarken(this.card().style.color, 4);
    const lighten = `rgb(from ${ this.card().style.color } r g b / 0.8)`;
    return `radial-gradient(circle, ${ lighten } 0%, ${ darken } 100%)`;
  }

  get component(): Type<any> {
    this.componentSelected = this.componentsMap[this.card().component] || CardErrorComponent;

    return this.componentSelected;
  }

  get inputs(): any {
    const isCardErrorComponent = this.componentSelected === CardErrorComponent;
    const isEmpty = ObjectUtil.isEmpty(this.card().inputs);

    if (isCardErrorComponent || isEmpty) {
      return undefined;
    }

    return { ...this.card().inputs };
  }
}
