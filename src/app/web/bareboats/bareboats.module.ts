import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BareboatsRoutingModule } from './bareboats-routing.module';
import { BareboatsComponent } from './bareboats.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterAdvanceComponent } from './components/filter-advance/filter-advance.component';
import { BoatsComponent } from './components/boats/boats.component';
import { BooksComponent } from './components/books/books.component';
import { PlusComponent } from './components/plus/plus.component';



@NgModule({
  declarations: [
    BareboatsComponent,
    BoatsComponent,
    BooksComponent,
    FilterComponent,
    FilterAdvanceComponent,
    PlusComponent
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
