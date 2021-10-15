import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  @Output() closeFilter = new EventEmitter<boolean>();
  @Input() filterB! : boolean;
  constructor() { }

  ngOnInit(): void {

  }
  closeFilterS(){
    this.filterB = !this.filterB;
    this.closeFilter.emit(this.filterB);
  }

}
