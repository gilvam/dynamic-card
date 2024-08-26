import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRenderComponent } from './card-render.component';

describe('CardDisplayComponent', () => {
  let component: CardRenderComponent;
  let fixture: ComponentFixture<CardRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
