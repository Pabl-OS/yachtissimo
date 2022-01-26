import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAdvanceComponent } from './filter-advance.component';

describe('FilterAdvanceComponent', () => {
  let component: FilterAdvanceComponent;
  let fixture: ComponentFixture<FilterAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
