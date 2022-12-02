import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-herramientas-input',
  templateUrl: './herramientas-input.component.html',
  styleUrls: ['./herramientas-input.component.scss']
})
export class HerramientasInputComponent implements OnInit {

  constructor() { }

  @Input()
  quantity!: number;
  @Input()
  maxStock!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if (this.quantity < this.maxStock){
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }
  }

  donwQuantity(): void {
    if (this.quantity >0) {
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity (event: any): void {
    let acceptedValue = /^[0-9]+$/;
    if (!event.key.match(acceptedValue)) {
          alert("Usteded ingreso ("+ event.key + ") Por favor ingrese un numero");
          this.quantity = 0;
    }
    else {     
      this.quantityChange.emit(this.quantity);
    }
  }
}
