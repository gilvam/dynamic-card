import { Component } from '@angular/core';
import { CardRenderComponent } from './card-render/card-render.component';
import { mockCards } from '../../public/mock/config.mock';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CardRenderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	list = mockCards;

	getGridTemplateArea(area: string[]): string {
		return area.map((row) => `"${row}"`).join(' ');
	}
}
