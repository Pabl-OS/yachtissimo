import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'yachtissimo';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'es'])
  }
}
