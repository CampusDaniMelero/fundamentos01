import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ts01Component } from './ts01/ts01.component';
import { Angular01Component } from './angular01/angular01.component';
import { Reto01Component } from './reto01/reto01.component';
import { Reto02Component } from './reto02/reto02.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ts01Component, Angular01Component, Reto01Component, Reto02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos01';
}
