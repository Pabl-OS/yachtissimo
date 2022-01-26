import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.sass']
})
export class GalleryDetailComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "../../../../../assets/Imagenes catálogo/Mare blu.png"},
    {img: "../../../../../assets/Imagenes catálogo/Mala.png"},
    {img: "../../../../../assets/Imagenes catálogo/Luna.png"},
    {img: "../../../../../assets/Imagenes catálogo/Mashattva.png"},
    {img: "../../../../../assets/Imagenes catálogo/Mare blu.png"},
    {img: "../../../../../assets/Imagenes catálogo/Mala.png"},
    {img: "../../../../../assets/Imagenes catálogo/Luna.png"},
    {img: "../../../../../assets/Imagenes catálogo/Mashattva.png"},
  ];
  slideConfig = {
  "slidesToShow": 4, 
  "slidesToScroll": 4,
  "centerPadding": '60px',
  "dots": false,
  "centerMode": false,
  "variableWidth": false,
  "color": 'dark',
  "arrows":true,
  "prevArrow":"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  "nextArrow":"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  "infinite": false,
  'responsive': [
    {
      'breakpoint': 1024,
      'settings': {
        'slidesToShow': 4,
        "slidesToScroll": 4,
      } 
    },
    {
      'breakpoint': 600,
      'settings': {
        'slidesToShow': 3,
        "slidesToScroll": 3,
      }
    },
    {
      'breakpoint': 480,
      'settings': {
        'slidesToShow': 3,
        "slidesToScroll": 3,

      }
    }
  ]
 };

  ngOnInit(): void {
  }

}
