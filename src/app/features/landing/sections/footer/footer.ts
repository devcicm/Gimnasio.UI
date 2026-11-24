import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MARCA, REDES, SECCIONES } from '../../landing-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly marca = MARCA.nombre;
  protected readonly secciones = SECCIONES;
  protected readonly redes = REDES;
  protected readonly anio = new Date().getFullYear();
}
