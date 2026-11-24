import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Clases } from './sections/clases/clases';
import { Contacto } from './sections/contacto/contacto';
import { Footer } from './sections/footer/footer';
import { Hero } from './sections/hero/hero';
import { Horarios } from './sections/horarios/horarios';
import { Navbar } from './sections/navbar/navbar';
import { Planes } from './sections/planes/planes';

@Component({
  selector: 'app-landing',
  imports: [Clases, Contacto, Footer, Hero, Horarios, Navbar, Planes],
  templateUrl: './landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {}
