import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFubusComponent } from './test-fubus.component';

describe('TestFubusComponent', () => {
  let component: TestFubusComponent;
  let fixture: ComponentFixture<TestFubusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFubusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFubusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
