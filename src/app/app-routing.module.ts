import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerramientasAboutComponent } from './herramientas-about/herramientas-about.component';
import { HerramientasBuyComponent } from './herramientas-buy/herramientas-buy.component';
import { HerramientasHomeComponent } from './herramientas-home/herramientas-home.component';

const routes: Routes = [

  { path: 'home',
    component: HerramientasHomeComponent
},
    { path: 'buy',
      component: HerramientasBuyComponent
  },
  { path: 'about',
    component: HerramientasAboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
