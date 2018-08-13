import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPlacesComponent } from './day-places.component';

describe('DayPlacesComponent', () => {
  let component: DayPlacesComponent;
  let fixture: ComponentFixture<DayPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
