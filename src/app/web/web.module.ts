import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
// import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    WebComponent,

  ],

  imports: [
    CommonModule,
    WebRoutingModule,
    TranslateModule,
    SharedModule,
  ]
})
export class WebModule { }
