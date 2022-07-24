import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'nahum',
    poder: 5600,
  };

  constructor(private dbzService: DbzService) {}

  // personajes: Personaje[] = [
  //   {
  //     nombre: 'Vegeta',
  //     poder: 7000,
  //   },
  //   {
  //     nombre: 'Goku',
  //     poder: 15000,
  //   },
  //   {
  //     nombre: 'Tarzan',
  //     poder: 300,
  //   },
  // ];

  //Opcion sin ngModel, es decir , con (input) cuando en el html esta asi
  //   <input
  //   type="text"
  //   placeholder="Nombre"
  //   [value]="nuevo.nombre"
  //   (input)="cambiarNombre($event)"
  // />

  // cambiarNombre(event: any) {
  //   this.nuevo.nombre = event.target.value;
  // }

  // cambiarPoder(event: any) {
  //   this.nuevo.poder = event.target.value;
  // }

  //opcion con ngModel

  // opcion 1 , si en el form esta de la sig manera
  // <form (submit)="agregar($event)">

  // agregar(event: any) {
  //   event.preventDefault();
  //   console.log('agregando....');
  // }

  // opcion2 - si en el form esta de la sig manera
  // <form (ngSubmit)="agregar()">
}
