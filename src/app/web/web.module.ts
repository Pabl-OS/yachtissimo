import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { HeaderComponent } from './shared/header/header.component';
// import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    WebComponent,
    HeaderComponent
  ],


  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
