import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.sass']
})
export class GalleryDetailComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
  "slidesToShow": 4, 
  "slidesToScroll": 4,

  "dots": false,
  "centerMode": false,
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

  ngOnInit(): void {
  }

}
