import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsocialComponent } from './csocial.component';

describe('CsocialComponent', () => {
  let component: CsocialComponent;
  let fixture: ComponentFixture<CsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
