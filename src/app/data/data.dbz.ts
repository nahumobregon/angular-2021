import { Personaje } from '../dbz/interfaces/dbz.interface';

export const obtenerDataDBZ = () => {
  let personajes: Personaje[] = [
    {
      nombre: 'Vegeta',
      poder: 7000,
    },
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Tarzan',
      poder: 300,
    },
  ];

  return personajes;
};
