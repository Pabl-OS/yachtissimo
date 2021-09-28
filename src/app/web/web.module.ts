import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
// import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [

  ],


  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
