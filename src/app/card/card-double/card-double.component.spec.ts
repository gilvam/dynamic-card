import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoubleComponent } from './card-double.component';
import { InputSignal } from '@angular/core';

describe('CardDoubleComponent', () => {
  let component: CardDoubleComponent;
  let fixture: ComponentFixture<CardDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDoubleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.title = (() => 't') as InputSignal<string | undefined>;
    component.titleSecond = (() => 'tSec') as InputSignal<string | undefined>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
