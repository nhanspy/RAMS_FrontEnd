import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KiemTraVeComponent} from './kiem-tra-ve.component';

describe('KiemTraVeComponent', () => {
  let component: KiemTraVeComponent;
  let fixture: ComponentFixture<KiemTraVeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KiemTraVeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemTraVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
