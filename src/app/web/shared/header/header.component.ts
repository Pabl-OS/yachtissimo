import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],


})
export class HeaderComponent implements OnInit {

  langs: string[] = [];
  nameLang: string = "";

  constructor(private translateService: TranslateService) {
    this.langs = this.translateService.getLangs();
    this.setLangName();
  }

  ngOnInit(): void {
  }
  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.setLangName();
  }

  setLangName() {
    this.nameLang = localStorage.getItem('lang') || 'en';
    if (this.nameLang != 'en') {
      this.translateService.use(this.nameLang);
    }
  }

}
