import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should return a grid template area string', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		const result = app.getGridTemplateArea(['a b', 'c d']);
		expect(result).toBe('"a b" "c d"');
	});
});
