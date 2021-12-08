import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { PlusComponent } from './plus/plus.component';
import { SocialComponent } from './social/social.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Injectable } from '@angular/core';
import { BoatCardComponent } from './boat-card/boat-card.component';

@Injectable({
  providedIn: 'root',
})


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PlusComponent,
    SocialComponent,
    BoatCardComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule,
    TranslateModule
  ],
  exports:[
  FooterComponent,
  HeaderComponent,
  PlusComponent,
  SocialComponent,
  BoatCardComponent
  ]
})
export class SharedModule { }
