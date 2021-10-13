import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filter-advance',
  templateUrl: './filter-advance.component.html',
  styleUrls: ['./filter-advance.component.sass']
})
export class FilterAdvanceComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }
  closeFilter() {
    this.close.emit(false);
  }

}
