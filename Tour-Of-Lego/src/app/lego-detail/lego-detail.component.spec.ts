import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoDetailComponent } from './lego-detail.component';

describe('LegoDetailComponent', () => {
  let component: LegoDetailComponent;
  let fixture: ComponentFixture<LegoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
