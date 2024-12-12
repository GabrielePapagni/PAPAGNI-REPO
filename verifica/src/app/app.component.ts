import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  names: string[];
  constructor() { 
    this.names = ['Escavatore', 'Pala Meccanica', 'Bulldozer', 'Grù', 'Rullo Compattatore', 'Trattore Cingolato', 'Betoniera', 'Camion Ribaltabile', 'Carrello Elevatore', 'Miniescavatore']; // Riempiamo il vettore con nomi di macchine da cantiere
  }
}
