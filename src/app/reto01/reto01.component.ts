import { NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto01',
  standalone: true,
  imports: [FormsModule , NgIf],
  templateUrl: './reto01.component.html',
  styleUrl: './reto01.component.css'
})
export class Reto01Component implements OnInit {
  email: string = "";
  password: string = "";
  repeatPassword: string = "";
  mensaje: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.password === this.repeatPassword) {
      this.mensaje = "Bienvenido";
    } else {
      this.mensaje = "Usuario o contraseña inválidos";
    }
  }
}


