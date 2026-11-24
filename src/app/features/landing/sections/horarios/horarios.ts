import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HORARIOS_CLASES, HORARIOS_GENERALES } from '../../landing-data';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.html',
  styleUrl: './horarios.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Horarios {
  protected readonly horariosGenerales = HORARIOS_GENERALES;
  protected readonly horariosClases = HORARIOS_CLASES;
}
