import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular01',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular01.component.html',
  styleUrl: './angular01.component.css'
})
export class Angular01Component {
    title="Mi primera aplicacion Angular";
    valor:boolean=false;
    dni:string='12345678A';
    funcion(): void {
      console.log("Hola Mundo");
    }
}
