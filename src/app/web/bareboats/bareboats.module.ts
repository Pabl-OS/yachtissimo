import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BareboatsRoutingModule } from './bareboats-routing.module';
import { BareboatsComponent } from './bareboats.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterAdvanceComponent } from './components/filter-advance/filter-advance.component';
import { BoatsComponent } from './components/boats/boats.component';
import { BooksComponent } from './components/books/books.component';
import { PlusComponent } from './components/plus/plus.component';
import { SocialComponent } from './components/social/social.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@NgModule({
  declarations: [
    BareboatsComponent,
    BoatsComponent,
    BooksComponent,
    FilterComponent,
    FilterAdvanceComponent,
    PlusComponent,
    SocialComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    BareboatsRoutingModule,
    TranslateModule
  ]
})
export class BareboatsModule { }
