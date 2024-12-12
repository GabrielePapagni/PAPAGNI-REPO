import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  names: string[];
  constructor() { 
    this.names = ['Escavatore', 'Pala Meccanica', 'Bulldozer', 'Grù', 'Rullo Compattatore', 'Trattore Cingolato', 'Betoniera', 'Camion Ribaltabile', 'Carrello Elevatore', 'Miniescavatore'];
  }
}
