import { Component } from '@angular/core';

enum Temporada {
  Otoño = "Otoño",
  Invierno = "Invierno",
  Primavera = "Primavera",
  Verano = "Verano"
}

@Component({
  selector: 'app-ejercicios-fundamentos01',
  standalone: true,
  templateUrl: './ejercicios-fundamentos01.component.html',
  styleUrl: './ejercicios-fundamentos01.component.css'
})
export class EjerciciosFundamentos01Component {
  constructor() {}

  ejercicio1(): void {
    // EJERCICIO 1
    // TODO: Modifique el código para agregar tipos a las declaraciones de variables.
    // El JavaScript resultante debería verse igual que el ejemplo original cuando haya terminado.
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;
    if (ukCitizen) {
      console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
      console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
  }

  ejercicio2(): void {
    /* EJERCICIO 2
    TODO: Puede utilizar tipos para garantizar los resultados de la operación.
    Ejecute el código tal cual y luego modifíquelo.
    que tenga variables fuertemente tipadas. Luego, solucione los errores que
    encuentre para que el resultado
    devuelto a a es 12. */
    let x: number;
    let y: number;
    let a: number;
    x = 5; // Ahora x es un número en lugar de una cadena de texto
    y = 7;
    a = x + y;
    console.log(a);
  }
  
  ejercicio3(): void {
    // Código del ejercicio 3
    console.log(this.whichMonths(Temporada.Otoño)); // Output: Septiembre a Noviembre
  }

  whichMonths(season: Temporada): string {
    let monthsInSeason: string;
    switch (season) {
      case Temporada.Otoño:
        monthsInSeason = "Septiembre a Noviembre";
        break;
      case Temporada.Invierno:
        monthsInSeason = "Diciembre a Febrero";
        break;
      case Temporada.Primavera:
        monthsInSeason = "Marzo a Mayo";
        break;
      case Temporada.Verano:
        monthsInSeason = "Junio a Agosto";
        break;
      default:
        monthsInSeason = "Temporada no válida";
    }
    return monthsInSeason;
 
  }
  ejercicio4(): void {
      /* EJERCICIO 4
      TODO: Declara el array con el tipo que coincida con el tipo de los elementos
      dentro del array. */
      let randomNumbers: number[] = []; // Declara el array como un array de números
      let nextNumber: number;
      for (let i = 0; i < 10; i++) {
        nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        randomNumbers.push(nextNumber);
      }
      console.log(randomNumbers);
    }
}
