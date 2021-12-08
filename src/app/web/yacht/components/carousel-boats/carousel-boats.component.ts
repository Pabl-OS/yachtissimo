import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-boats',
  templateUrl: './carousel-boats.component.html',
  styleUrls: ['./carousel-boats.component.sass']
})
export class CarouselBoatsComponent implements OnInit,AfterViewInit {

  constructor() { }
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll":3,
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
        'breakpoint': 1900,
        'settings': {
          'slidesToShow': 3,
          "slidesToScroll":3
        } 
      },
      {
        'breakpoint': 1024,
        'settings': {
          'slidesToShow': 2,
          "slidesToScroll":2
        } 
      },
      {
        'breakpoint': 800,
        'settings': {
          'slidesToShow': 1,
          'slidesToScroll': 1
        }
      }
      ,
      {
        'breakpoint': 600,
        'settings': {
          'slidesToShow': 1,
          'slidesToScroll': 1
        }
      }
    ]
}

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  
  
}
}