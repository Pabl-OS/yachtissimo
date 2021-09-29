import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BareboatsRoutingModule } from './bareboats-routing.module';
import { BareboatsComponent } from './bareboats.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterAdvanceComponent } from './components/filter-advance/filter-advance.component';
import { HeaderComponent } from '../shared/header/header.component';



@NgModule({
  declarations: [
    BareboatsComponent,
    FilterComponent,
    FilterAdvanceComponent,
    HeaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    BareboatsRoutingModule
  ]
})
export class BareboatsModule { }
