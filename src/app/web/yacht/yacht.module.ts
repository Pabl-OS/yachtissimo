import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YachtRoutingModule } from './yacht-routing.module';
import { DetailsComponent } from './page/details/details.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { CrewComponent } from './page/crew/crew.component';
import { YachtComponent } from './yacht.component';
import { CalendarComponent } from './page/calendar/calendar.component';
import { ReviewComponent } from './page/review/review.component';
import { VideoComponent } from './page/video/video.component';
import { CrewProfileComponent } from './components/crew-profile/crew-profile.component';
import { MenuComponent } from './page/menu/menu.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselBoatsComponent } from './components/carousel-boats/carousel-boats.component';


@NgModule({
  declarations: [
    DetailsComponent,
    TestimonialComponent,
    GalleryDetailComponent,
    CrewComponent,
    YachtComponent,
    CalendarComponent,
    ReviewComponent,
    VideoComponent,
    CrewProfileComponent,
    MenuComponent,
    CarouselBoatsComponent,

  ],
  imports: [
    CommonModule,
    YachtRoutingModule,
    SlickCarouselModule,
    SharedModule
    
    // SlickCarouselModule
    

    
  ]
})
export class YachtModule { }
