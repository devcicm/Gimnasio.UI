import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MARCA, SECCIONES } from '../../landing-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  protected readonly marca = MARCA.nombre;
  protected readonly secciones = SECCIONES;
  protected readonly menuAbierto = signal(false);

  protected alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  protected cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}
