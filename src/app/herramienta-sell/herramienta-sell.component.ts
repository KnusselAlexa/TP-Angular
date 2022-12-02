import { Component, OnInit } from '@angular/core';
import { HerramientasCartService } from '../herramientas-cart.service';
import { HerramientasDataService } from '../herramientas-data.service';
import { Herramienta } from '../herramientas-list/Herramienta';

@Component({
  selector: 'app-herramienta-sell',
  templateUrl: './herramienta-sell.component.html',
  styleUrls: ['./herramienta-sell.component.scss']
})
export class HerramientaSellComponent implements OnInit {
  herramientas: Herramienta [] = [];

  constructor(private herrSer:HerramientasCartService,
              private herrData:HerramientasDataService) { }

  ngOnInit(): void {
    this.herramientas = this.herrSer.getCartlist();
  }

  seeCartBuy (): boolean {
    this.ngOnInit();
    return this.herrSer.auxSell.value;
  }

  deleteCart() {

    this.herrSer.deleteCartList();
    this.herrSer.deletetotalShop();
    this.herrSer.deleteAuxSell();
    this.herramientas =  [];
}

totalBuy (): void {
this.herrSer.totalShop.value;
}
}
