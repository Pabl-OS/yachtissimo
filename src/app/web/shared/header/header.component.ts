import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderInterface } from 'src/app/interfaces/header/Header.interface';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})

export class HeaderComponent implements OnInit,AfterViewInit {
  @ViewChild('carouselExample') carrousel!: ElementRef;
  langs: string[] = [];
  nameLang: string = "";
  isCollapsed = true;
  collapsed:boolean =false;
  charged:boolean = false;

  carousel: HeaderInterface= {};

 

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
    {img: "./assets/Imagenes/Imagenes catálogo/Alizé.png"},
    {img: "./assets/Imagenes/Imagenes catálogo/Alice.png"},
    {img: "./assets/Imagenes/Imagenes catálogo/Elvira.png"},
    {img: "./assets/Imagenes/Imagenes catálogo/Luna.png"}
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
        'slidesToShow': 1,
        "slidesToScroll": 1,
      }
    },
    {
      'breakpoint': 480,
      'settings': {
        'slidesToShow': 1,
        "slidesToScroll": 1,
      }
    }
  ]
 };
  
  

  ngOnInit(){
    
    
  }
 
  ngAfterViewInit(){


    document.addEventListener("DOMContentLoaded", function(){
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('shown.bs.dropdown', function () {
            var el_overlay = document.createElement('span');
            el_overlay.className = 'screen-darken';
            document.body.appendChild(el_overlay)
        });
    
        everydropdown.addEventListener('hide.bs.dropdown', function () {
          document.body.removeChild(document.querySelector('.screen-darken')as any );
        });
      });
    
    }); 

  }
 

}
