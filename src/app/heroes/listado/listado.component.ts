import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'spiderman',
    'superman',
    'thor',
    'batman',
    'Capitan America',
  ];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando heroe');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
