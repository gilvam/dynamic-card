import { AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CardSimpleComponent } from '../card/card-simple/card-simple.component';
import { CardDoubleComponent } from '../card/card-double/card-double.component';
import { CardTableComponent } from '../card/card-table/card-table.component';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.scss'
})
export class CardDisplayComponent implements AfterViewInit {
  @ViewChild('card', { read: ViewContainerRef }) cardContainer!: ViewContainerRef;

  @Input() card!: { name: string, component: any, style: any };

  private componentsMap: { [key: string]: any } = {
    'app-card-simple': CardSimpleComponent,
    'app-card-double': CardDoubleComponent,
    'app-card-table': CardTableComponent,
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.renderCards();
  }

  renderCards() {
    const component = this.componentsMap[this.card.component];

    if(!component) {
      throw new Error(`Component ${this.card.component} not found`);
    }

    this.cardContainer.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.cardContainer.createComponent(factory);
    Object.assign(componentRef.location.nativeElement.style, { background: this.card.style.color });
  }
}
