import { Component, input, Type, ViewChild, ViewContainerRef } from '@angular/core';
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
  styleUrl: './card-display.component.scss'
})
export class CardDisplayComponent {
  @ViewChild('card', { read: ViewContainerRef }) cardContainer!: ViewContainerRef;
  card = input.required<ICard>();

  private componentSelected!: Type<any>;
  private componentsMap: { [key: string]: any } = {
    'app-card-simple': CardSimpleComponent,
    'app-card-double': CardDoubleComponent,
    'app-card-table': CardTableComponent,
  };

  get component(): Type<any> {
    return this.componentSelected = this.componentsMap[this.card().component] || CardErrorComponent;
  }

  get inputs(): any {
    const isCardErrorComponent = this.componentSelected === CardErrorComponent;
    const isEmpty = ObjectUtil.isEmpty(this.card().inputs);

    if (isCardErrorComponent || isEmpty) {
      return undefined;
    }

    return this.card().inputs;
  }
}
