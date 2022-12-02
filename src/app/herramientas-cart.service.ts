import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Herramienta } from './herramientas-list/Herramienta';

@Injectable({
  providedIn: 'root'
})
export class HerramientasCartService {

  private _cartList: Herramienta[] = [];
  private _totalShop: number = 0;
  private _auxSell: boolean = false;

  cartList: BehaviorSubject<Herramienta[]> = new BehaviorSubject(this._cartList);

  totalShop: BehaviorSubject<number> = new BehaviorSubject(this._totalShop);

  auxSell: BehaviorSubject<boolean> = new BehaviorSubject(this._auxSell);

  constructor() { 
  }

  public getCartlist(): Herramienta[] {
    return this._cartList;
  }

  public deleteCartList(): void {
    this.cartList.next([]); 
    this._cartList = [];
  }
  public deletetotalShop(): void {
    this.totalShop.next(0); 
    this._totalShop = 0;
    
  }

  public deleteAuxSell (): void {
    this._auxSell = false
    this.auxSell.next(false);

  }


  
  addToCart (herramienta:Herramienta) {
    if (herramienta.quantity >0) {
      let item = this._cartList.find((v1)=>v1.id == herramienta.id);
      if ((!item)) {
        this._cartList.push({... herramienta});
      }
      else {
        item.quantity += herramienta.quantity;
      }
      this.cartList.next(this._cartList);
    }
  }


  seeCartList (): boolean {
    return this._cartList.length>0;
    }



totalBuy() {
  this._totalShop = 0;
  for(let i = 0; (i<this._cartList.length); i++){
    if (this._cartList[i].clearance) {
      this._totalShop += ((this._cartList[i].price * 0.8) * this._cartList[i].quantity);
    } else {
    this._totalShop += this._cartList[i].price * this._cartList[i].quantity;
    }
  }
  this.totalShop.next(this._totalShop);
  this.auxSell.next(true);
}

}