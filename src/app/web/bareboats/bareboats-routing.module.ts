import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BareboatsComponent } from './bareboats.component';

const routes: Routes = [
  {
    path:'',
    component : BareboatsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BareboatsRoutingModule { }
