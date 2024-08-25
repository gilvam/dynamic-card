import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartChartCircleComponent } from './cart-chart-circle.component';

describe('CartChartCircleComponent', () => {
  let component: CartChartCircleComponent;
  let fixture: ComponentFixture<CartChartCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartChartCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartChartCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
