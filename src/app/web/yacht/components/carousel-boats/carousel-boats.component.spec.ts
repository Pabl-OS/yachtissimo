import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBoatsComponent } from './carousel-boats.component';

describe('CarouselBoatsComponent', () => {
  let component: CarouselBoatsComponent;
  let fixture: ComponentFixture<CarouselBoatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBoatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
