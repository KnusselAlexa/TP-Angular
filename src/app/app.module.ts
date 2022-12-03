import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerramientasHomeComponent } from './herramientas-home/herramientas-home.component';
import { HerramientasAboutComponent } from './herramientas-about/herramientas-about.component';
import { HerramientasBuyComponent } from './herramientas-buy/herramientas-buy.component';
import { HerramientasCartComponent } from './herramientas-cart/herramientas-cart.component';
import { HerramientasListComponent } from './herramientas-list/herramientas-list.component';
import { HerramientasInputComponent } from './herramientas-input/herramientas-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HerramientasHomeComponent,
    HerramientasAboutComponent,
    HerramientasBuyComponent,
    HerramientasCartComponent,
    HerramientasListComponent,
    HerramientasInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
