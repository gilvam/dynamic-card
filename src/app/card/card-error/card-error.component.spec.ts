import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardErrorComponent } from './card-error.component';
import { InputSignal } from '@angular/core';

describe('CardErrorComponent', () => {
  let component: CardErrorComponent;
  let fixture: ComponentFixture<CardErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardErrorComponent],
    }).compileComponents();

    TestBed.runInInjectionContext(() => {
      fixture = TestBed.createComponent(CardErrorComponent);
      component = fixture.componentInstance;
    });
  });

  beforeEach(() => {
    component.card = (() => 'card') as InputSignal<string | undefined>;
    component.backGround = (() => 'ground') as InputSignal<string | undefined>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
