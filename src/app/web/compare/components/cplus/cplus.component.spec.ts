import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CplusComponent } from './cplus.component';

describe('CplusComponent', () => {
  let component: CplusComponent;
  let fixture: ComponentFixture<CplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
