import { AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';

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

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.renderCards();
  }

  renderCards() {
    if (!this.cardContainer && !this.card) {
      return;
    }

    this.cardContainer.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.card.component);
    const componentRef = this.cardContainer.createComponent(factory);
    // Object.assign(componentRef.location.nativeElement.style, this.card.style);
  }
}
