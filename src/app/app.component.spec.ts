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

  it('should sanitize a name with spaces', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.sanitize('Nome do Item');
    expect(result).toBe('#nome-do-item');
  });

  it('should sanitize a name with uppercase letters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.sanitize('NomeDoItem');
    expect(result).toBe('#nomedoit');
  });

  it('should sanitize a name with special characters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.sanitize('Nome@Item!');
    expect(result).toBe('#nome@item!');
  });

  it('should return an empty string when sanitizing an empty name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.sanitize('');
    expect(result).toBe('#');
  });

  it('should return a grid template area string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.getGridTemplateArea(['a b', 'c d']);
    expect(result).toBe('"a b" "c d"');
  });
});
