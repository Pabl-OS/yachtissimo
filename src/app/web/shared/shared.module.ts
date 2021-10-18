import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { PlusComponent } from './plus/plus.component';
import { SocialComponent } from './social/social.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PlusComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports:[
  FooterComponent,
  HeaderComponent,
  PlusComponent,
  SocialComponent
  ]
})
export class SharedModule { }
