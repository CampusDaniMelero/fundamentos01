import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto02',
  standalone: true,
  imports: [FormsModule , NgIf],
  templateUrl: './reto02.component.html',
  styleUrl: './reto02.component.css'
})
export class Reto02Component {
  nombre: string = "";
  precioCosto: number = 0;
  precioVenta: number = 0;
  stock: number = 0;
  mensaje: string = "Producto dado de alta";

  constructor() { }

  ngOnInit(): void {
  }

  handleProduct(): void {
    if (this.precioCosto > 0 && this.precioVenta > 0 && this.stock > 0) {
      this.showMessage();
    } else {
      this.mensaje = "Los precios y el stock deben ser mayores a cero";
      this.showMessage();
    }
  }

  showMessage(): void {
    const messageElement = document.querySelector('.message');
    if (messageElement) {
      messageElement.classList.toggle('active'); // Toggle visibility
    }
  }
}