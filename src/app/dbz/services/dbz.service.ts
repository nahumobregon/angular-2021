import { Injectable } from '@angular/core';
import { obtenerDataDBZ } from 'src/app/data/data.dbz';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  //Usualmente el orden es : Propiedades , getter y setter , constructor , metodos y se pueden agregar mas servicios

  private _personajes: Personaje[] = obtenerDataDBZ();

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    //console.log('servicio DbzService inicializado');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
