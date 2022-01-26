import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BareboatsComponent } from './bareboats.component';

describe('BareboatsComponent', () => {
  let component: BareboatsComponent;
  let fixture: ComponentFixture<BareboatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BareboatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BareboatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
