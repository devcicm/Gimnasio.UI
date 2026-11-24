import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACTO } from '../../landing-data';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacto {
  protected readonly contacto = CONTACTO;
  protected readonly enviado = signal(false);

  protected nombre = '';
  protected email = '';
  protected mensaje = '';

  protected enviar(evento: Event): void {
    evento.preventDefault();
    this.enviado.set(true);
  }
}
