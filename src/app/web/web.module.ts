import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
// import { NotFoundComponent } from './shared/not-found/not-found.component';
// import { HeaderComponent } from './shared/header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    WebComponent,

  ],

  imports: [
    CommonModule,
    WebRoutingModule,
    TranslateModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class WebModule { }
