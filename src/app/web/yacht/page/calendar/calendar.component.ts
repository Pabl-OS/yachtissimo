import { Component, OnInit } from '@angular/core';
// import $ from '@;
declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  onAfterInit(){
    $(".slider").slick({

      // normal options...
      infinite: false,
    
      // the magic
      responsive: [{
    
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
    
        }, {
    
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots: true
          }
    
        }, {
    
          breakpoint: 300,
          settings: "unslick" // destroys slick
    
        }]
    });

  }


}
