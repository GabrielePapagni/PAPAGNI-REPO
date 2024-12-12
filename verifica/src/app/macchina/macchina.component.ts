import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent implements OnInit{
  @Input() macchina: string = "";
  constructor() {
  }

  ngOnInit(): void {
  }
}
