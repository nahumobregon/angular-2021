import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  // @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  //  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.personajes.push(this.nuevo);

    //Lo siguiente en caso de estar usando @Output onNuevoPersonaje ...
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    // console.log(this.nuevo);
    //debugger;

    this.nuevo = {
      nombre: '',
      poder: 0,
    };

    //console.log('Agregando');
    // console.log(this.personajes);
  }
}
