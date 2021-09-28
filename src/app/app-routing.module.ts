import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'web',
  loadChildren: ()=> import('./web/web.module').then(m => m.WebModule)
  },
  {
    path:'**',
    redirectTo:'web'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
