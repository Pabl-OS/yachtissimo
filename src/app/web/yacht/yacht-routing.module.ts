import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './page/calendar/calendar.component';
import { CrewComponent } from './page/crew/crew.component';
import { DetailsComponent } from './page/details/details.component';
import { ReviewComponent } from './page/review/review.component';
import { YachtComponent } from './yacht.component';

const routes: Routes = [
  {
    path: '',
    component:YachtComponent,
    children:[
      {
        path:'specification',
        component:DetailsComponent
      },
      {
        path:'crew',
        component:CrewComponent
      },
      {
        path:'calendar',
        component:CalendarComponent
      },
      {
        path:'review',
        component:ReviewComponent
      },
      {
        path:'**',
        redirectTo:'specification'
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YachtRoutingModule { }
