import { Component, OnInit } from '@angular/core';
import {Herramienta} from './Herramienta';


@Component({
  selector: 'app-herramientas-list',
  templateUrl: './herramientas-list.component.html',
  styleUrls: ['./herramientas-list.component.scss']
})
export class HerramientasListComponent implements OnInit {

  herramientas: Herramienta[] = [
  {
    name:'Pala',
    type:'Punta', 
    price:2000,
    stock:0, 
    image:"",
    clearance: false,
    quantity: 0,
  },
  {
    name:'Destornillador',
    type:'Paleta', 
    price:250,
    stock:10, 
    image:"",
    clearance: true,
    quantity: 0,
  },
  {
    name:'Llave tubo',
    type:'12"', 
    price:300,
    stock:15, 
    image:"",
    clearance: false,
    quantity: 0,
  },
  {
    name:'Martillo',
    type:'Chapista', 
    price:1500,
    stock:8, 
    image:"",
    clearance: false,
    quantity: 0,
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
