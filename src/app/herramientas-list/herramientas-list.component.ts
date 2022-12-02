import {Component, Input, OnInit } from '@angular/core';
import { HerramientasCartService } from '../herramientas-cart.service';
import { HerramientasDataService } from '../herramientas-data.service';
import {Herramienta} from './Herramienta';



@Component({
  selector: 'app-herramientas-list',
  templateUrl: './herramientas-list.component.html',
  styleUrls: ['./herramientas-list.component.scss']
})
export class HerramientasListComponent implements OnInit {

  @Input()
  herramientas: Herramienta [] = [];

  constructor(private cart: HerramientasCartService){
  
}

ngOnInit(): void {
this.checkStock();
}

addToCart (herramienta: Herramienta): void {
  this.cart.addToCart(herramienta);
  herramienta.stock -= herramienta.quantity;
  herramienta.quantity = 0;
}

checkStock () :void {
  let auxList: Herramienta [] = this.cart.getCartlist();
  for (let i=0; i<this.herramientas.length; i++){
    for (let j=0; j< auxList.length; j++){
      if (this.herramientas[i].id == auxList[j].id) {
        this.herramientas[i].stock += auxList[j].quantity;
      }
    }
  }
}

}
