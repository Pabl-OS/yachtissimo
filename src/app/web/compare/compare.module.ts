import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';
import { CardCompareComponent } from './components/card-compare/card-compare.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CompareComponent,
    CardCompareComponent,


  ],
  imports: [
    CommonModule,
    CompareRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class CompareModule { }
