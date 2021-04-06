import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemChiTietChuyenXeComponent } from './xem-chi-tiet-chuyen-xe.component';

describe('XemChiTietChuyenXeComponent', () => {
  let component: XemChiTietChuyenXeComponent;
  let fixture: ComponentFixture<XemChiTietChuyenXeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemChiTietChuyenXeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemChiTietChuyenXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
