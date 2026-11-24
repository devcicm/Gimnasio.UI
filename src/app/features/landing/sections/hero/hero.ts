import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MARCA, STATS } from '../../landing-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly lema = MARCA.lema;
  protected readonly stats = STATS;
}
