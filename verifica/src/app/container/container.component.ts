import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  names: string[];
  constructor() { 
    this.names = ['Escavatore', 'Pala Meccanica', 'Bulldozer', 'Grù', 'Rullo Compattatore', 'Trattore Cingolato', 'Betoniera', 'Camion Ribaltabile', 'Carrello Elevatore', 'Miniescavatore'];
  }
}
