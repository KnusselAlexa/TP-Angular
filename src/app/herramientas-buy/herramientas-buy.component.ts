import { Component, Input, OnInit } from '@angular/core';
import { HerramientasCartService } from '../herramientas-cart.service';
import { HerramientasDataService } from '../herramientas-data.service';
import { Herramienta } from '../herramientas-list/Herramienta';

@Component({
  selector: 'app-herramientas-buy',
  templateUrl: './herramientas-buy.component.html',
  styleUrls: ['./herramientas-buy.component.scss']
})
export class HerramientasBuyComponent implements OnInit {

  herramientas: Herramienta [] = [];

  constructor(private cart: HerramientasCartService, 
              private herrService: HerramientasDataService){
  
}

ngOnInit(): void {
this.herrService.getAll().subscribe(herramientas => this.herramientas = herramientas);
}

seeCartList(): boolean {
  return this.cart.seeCartList();
}

totBuy (): void {
  this.cart.totalBuy();
  alert("El valor de la compra es: "+this.cart.totalShop.value);
}

deleteCart() {

  this.cart.deleteCartList();
  this.cart.deletetotalShop();
  this.cart.deleteAuxSell();
  this.ngOnInit();
  
}

}
