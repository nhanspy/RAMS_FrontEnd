import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemLichSuComponent } from './xem-lich-su.component';

describe('XemLichSuComponent', () => {
  let component: XemLichSuComponent;
  let fixture: ComponentFixture<XemLichSuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemLichSuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemLichSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
