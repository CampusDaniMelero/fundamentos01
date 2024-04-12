import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicios-calculadora2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ejercicios-calculadora2.component.html',
  styleUrl: './ejercicios-calculadora2.component.css'
})

  
  export class EjerciciosCalculadora2Component {
    constructor() {
      this.monto = 0;
      this.monedaDestino = 'Euro';
      this.monedaOrigen = 'Euro';
      



    }
    monto: number;
  monedaOrigen: string;
  monedaDestino: string;
  resultado: number =0;

  convertir(): void {
    switch (this.monedaOrigen) {
      case 'Libra':
        this.resultado = this.monto * 1.16; // Tasa de conversión de Libras a Euros
        break;
      case 'Dólares':
        this.resultado = this.monto * 0.85; // Tasa de conversión de Dólares a Euros
        break;
      case 'Euro':
        this.resultado = this.monto; // No es necesario convertir Euros a Euros
        break;
      default:
    }

    switch (this.monedaDestino) {
      case 'Libra':
        this.resultado *= 0.86; // Tasa de conversión de Euros a Libras
        break;
      case 'Dólares':
        this.resultado *= 1.18; // Tasa de conversión de Euros a Dólares
        break;
      case 'Euro':
        this.resultado*=1.13;
      break;
      default:
    }
  }
}