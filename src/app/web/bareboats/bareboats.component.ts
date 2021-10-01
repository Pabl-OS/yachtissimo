import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bareboats',
  templateUrl: './bareboats.component.html',
  styleUrls: ['./bareboats.component.sass']
})
export class BareboatsComponent implements OnInit {

  hideFilter:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
