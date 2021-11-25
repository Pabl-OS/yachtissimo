import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],


})
export class HeaderComponent implements OnInit {
  @ViewChild('carouselExample') carrousel!: ElementRef;
  langs: string[] = [];
  nameLang: string = "";
  isCollapsed = true;
  collapsed:boolean =false;

 

  constructor(private translateService: TranslateService) {
    this.langs = this.translateService.getLangs();
    this.setLangName();
  }

  disableClick(e : Event){
    e.stopPropagation();
  }
  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.setLangName();
  }
  setLangName() {
    this.nameLang = localStorage.getItem('lang') || 'en';
    this.translateService.use(this.nameLang);
  }
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
  "slidesToShow": 3, 
  "slidesToScroll": 3,
  "arrows":true,
  "variableWidth": false,
  "infinite": false,
  'responsive': [
    {
      'breakpoint': 1024,
      'settings': {
        'slidesToShow': 4
      }
    },
    {
      'breakpoint': 600,
      'settings': {
        'slidesToShow': 3
      }
    },
    {
      'breakpoint': 480,
      'settings': {
        'slidesToShow': 2
      }
    }
  ]
 };
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }

  ngOnInit(){}
 
  

}
