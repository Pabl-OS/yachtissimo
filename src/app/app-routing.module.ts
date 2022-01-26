import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './web/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'web',
    loadChildren: () => import('./web/web.module').then(m => m.WebModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
