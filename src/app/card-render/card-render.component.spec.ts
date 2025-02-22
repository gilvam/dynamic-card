import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardRenderComponent } from './card-render.component';
import { mockCards } from '../../../public/mock/config.mock';
import { InputSignal } from '@angular/core';
import { ICardItem } from '../_shared/model/card.interface';
import { CardSimpleComponent } from '../card/card-simple/card-simple.component';
import { CardDoubleComponent } from '../card/card-double/card-double.component';
import { CardErrorComponent } from '../card/card-error/card-error.component';

describe('CardRenderComponent', () => {
	let component: CardRenderComponent;
	let fixture: ComponentFixture<CardRenderComponent>;

	const mockCardItem = mockCards[0].cardItems[0];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [CardRenderComponent],
		}).compileComponents();

		TestBed.runInInjectionContext(() => {
			fixture = TestBed.createComponent(CardRenderComponent);
			component = fixture.componentInstance;
		});
	});

	beforeEach(() => {
		component.cardItem = (() => mockCardItem) as InputSignal<ICardItem>;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('background', () => {
		it('should calculate background with lighten and darken', () => {
			const expectedLighten = 'rgb(from #16796F r g b / 0.8)';
			const expectedDarken = 'hsl(174, 69%, 24%)';
			const expectedBackground = `radial-gradient(circle, ${expectedLighten} 0%, ${expectedDarken} 100%)`;

			expect(component.background).toEqual(expectedBackground);
		});
	});

	describe('component', () => {
		it('should render CardSimpleComponent', () => {
			const cardItem: ICardItem = {
				...mockCardItem,
				component: 'card-simple',
			};
			component.cardItem = (() => cardItem) as InputSignal<ICardItem>;

			expect(component.component).toBe(CardSimpleComponent);
		});

		it('should render CardDoubleComponent', () => {
			const cardItem: ICardItem = {
				...mockCardItem,
				component: 'card-double',
			};
			component.cardItem = (() => cardItem) as InputSignal<ICardItem>;

			expect(component.component).toBe(CardDoubleComponent);
		});

		it('should render CardErrorComponent for unknown component', () => {
			const cardItem: ICardItem = { ...mockCardItem, component: '?' };
			component.cardItem = (() => cardItem) as InputSignal<ICardItem>;

			expect(component.component).toBe(CardErrorComponent);
		});
	});

	describe('inputs', () => {
		it('should return undefined for CardErrorComponent', () => {
			const cardItem: ICardItem = { ...mockCardItem, inputs: undefined };
			component.cardItem = (() => cardItem) as InputSignal<ICardItem>;
			expect(component.inputs).toBeUndefined();
		});

		it('should return inputs for known component', () => {
			const cardItem: ICardItem = {
				...mockCardItem,
				inputs: { key: 'value' },
			};
			component.cardItem = (() => cardItem) as InputSignal<ICardItem>;
			expect(component.inputs).toEqual({ key: 'value' });
		});
	});
});
