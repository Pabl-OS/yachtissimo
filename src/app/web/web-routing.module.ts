import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';


const routes: Routes = [
  {
    path:'',
    component:WebComponent,
    children:[
      {
        path:'bareboats',
        loadChildren:()=> import('./bareboats/bareboats.module').then(m => m.BareboatsModule)
  
      },
      {
        path:'yacht',
        loadChildren:()=> import('./yacht/yacht.module').then(m => m.YachtModule)
  
      },
      {
        path:'compare',
        loadChildren:()=> import('./compare/compare.module').then(m => m.CompareModule)
      },
      {
        path:'**',
        redirectTo:'bareboats'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
