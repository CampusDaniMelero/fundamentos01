import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicios-calculadora',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './ejercicios-calculadora.component.html',
  styleUrl: './ejercicios-calculadora.component.css'
})
export class EjerciciosCalculadoraComponent {

  resultado: string = '';

  agregarNumero(numero: string): void {
    this.resultado += numero;
  }

  calcular(): void {
    try {
      this.resultado = eval(this.resultado);
    } catch (error) {
      this.resultado = 'Error';
    }
  }

  borrar(): void {
    this.resultado = '';
  }
}