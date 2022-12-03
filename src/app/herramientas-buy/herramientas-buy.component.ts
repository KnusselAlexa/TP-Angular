import { Component, OnInit } from '@angular/core';
import { HerramientasCartService } from '../herramientas-cart.service';
import { HerramientasDataService } from '../herramientas-data.service';
import { Herramienta } from '../herramientas-list/Herramienta';

@Component({
  selector: 'app-herramientas-buy',
  templateUrl: './herramientas-buy.component.html',
  styleUrls: ['./herramientas-buy.component.scss']
})
export class HerramientasBuyComponent implements OnInit {

herramientas: Herramienta[] = [];
  valueTotal:number = 0;
  seeBuy: boolean = false;
  finalBuy: boolean = false;

  constructor(private cart: HerramientasCartService, 
              private herrService: HerramientasDataService){

                cart.totalShop.subscribe((obser)=>this.valueTotal = obser),
                cart.auxSeeBuy.subscribe((obser)=>this.seeBuy = obser),
                cart.auxFinalBuy.subscribe((obser)=>this.finalBuy = obser)

}

ngOnInit(): void {
this.herrService.getAll().subscribe(herramientas => this.herramientas = herramientas);
}

//verque onda
seeButton(): boolean {
  return this.cart.auxSeeBuy.value;
}

seeAuxFinalBuy(): boolean{
  return this.cart.auxFinalBuy.value;
}

totalBuy (): void {
  this.valueTotal = this.cart.totalShop.value;
  this.cart.totalCart();
}


deleteCart() {

  this.cart.deleteCartList();
  this.cart.deletetotalShop();
  this.cart.deleteAuxSeebuy();
  this.cart.deleteAuxFinalBuy();
  this.ngOnInit();
  this.valueTotal = 0;

}

backShop(){
  this.cart.deleteCartList();
  this.cart.deletetotalShop();
  this.cart.deleteAuxSeebuy();
  this.cart.deleteAuxFinalBuy();
  this.valueTotal = 0;
}
}
