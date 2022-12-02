import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HerramientasCartService } from '../herramientas-cart.service';
import { HerramientasDataService } from '../herramientas-data.service';
import { Herramienta } from '../herramientas-list/Herramienta';


@Component({
  selector: 'app-herramientas-cart',
  templateUrl: './herramientas-cart.component.html',
  styleUrls: ['./herramientas-cart.component.scss']
})
export class HerramientasCartComponent implements OnInit {

  cartList: Herramienta [] = [];
  totalShop: Number = 0;


  constructor(private cart: HerramientasCartService, 
              private totalBuy: HerramientasCartService,
              private deleteBuy: HerramientasDataService) {
    cart.cartList.subscribe((obser)=>this.cartList = obser);
    totalBuy.totalShop.subscribe((obser)=>this.totalShop = obser);


  }
  
  ngOnInit(): void {

  }

  


}





