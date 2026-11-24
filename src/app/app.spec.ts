import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero headline', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const titulo = compiled.querySelector('.hero__titulo');
    expect(titulo?.textContent).toContain('tu cuerpo');
  });

  it('should render one card per class', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const tarjetas = compiled.querySelectorAll('.clase-card');
    expect(tarjetas.length).toBe(6);
  });

  it('should render the pricing plans', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const planes = compiled.querySelectorAll('.plan');
    expect(planes.length).toBe(3);
  });
});
