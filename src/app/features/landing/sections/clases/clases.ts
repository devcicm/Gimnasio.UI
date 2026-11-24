import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CLASES } from '../../landing-data';

@Component({
  selector: 'app-clases',
  imports: [DecimalPipe],
  templateUrl: './clases.html',
  styleUrl: './clases.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Clases {
  protected readonly clases = CLASES;
}
