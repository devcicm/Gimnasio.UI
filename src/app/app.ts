import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Landing } from './features/landing/landing';

@Component({
  selector: 'app-root',
  imports: [Landing],
  styleUrl: './app.scss',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
