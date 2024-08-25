import { Component, input, Type } from '@angular/core';
import { CardSimpleComponent } from '../card/card-simple/card-simple.component';
import { CardDoubleComponent } from '../card/card-double/card-double.component';
import { CardTableComponent } from '../card/card-table/card-table.component';
import { NgComponentOutlet } from '@angular/common';
import { ObjectUtil } from '../../_shared/util/object.util';
import { CardErrorComponent } from '../card/card-error/card-error.component';
import { ICard } from '../_shared/model/card.interface';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent {
  card = input.required<ICard>();

  private componentSelected!: Type<any>;
  private componentsMap: { [key: string]: any } = {
    'card-simple': CardSimpleComponent,
    'card-double': CardDoubleComponent,
    'card-table': CardTableComponent,
  };

  get color(): string {
    return `rgb(from ${ this.card().style.color } r g b / 0.7)`;
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

    return { ...this.card().inputs};
  }
}
