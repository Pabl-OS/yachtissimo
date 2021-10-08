import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';
import { CardCompareComponent } from './components/card-compare/card-compare.component';
import { CplusComponent } from './components/cplus/cplus.component';
import { CsocialComponent } from './components/csocial/csocial.component';



@NgModule({
  declarations: [
    CompareComponent,
    CardCompareComponent,
    CplusComponent,
    CsocialComponent,

  ],
  imports: [
    CommonModule,
    CompareRoutingModule
  ]
})
export class CompareModule { }
