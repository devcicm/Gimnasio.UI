import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PLANES } from '../../landing-data';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.html',
  styleUrl: './planes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Planes {
  protected readonly planes = PLANES;
}
