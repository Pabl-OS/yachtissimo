import { Component, OnInit } from '@angular/core';
import { HeaderInterface } from '../../../interfaces/header/Header.interface';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {
  carousel: HeaderInterface = {};
  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    { img: "./assets/Imagenes/Imagenes catálogo/Alizé.png" },
    { img: "./assets/Imagenes/Imagenes catálogo/Alice.png" },
    { img: "./assets/Imagenes/Imagenes catálogo/Elvira.png" },
    { img: "./assets/Imagenes/Imagenes catálogo/Luna.png" }
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "arrows": true,
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

  disableClick(e: Event) {
    e.stopPropagation();
  }
}
