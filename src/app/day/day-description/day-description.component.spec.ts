import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDescriptionComponent } from './day-description.component';

describe('DayDescriptionComponent', () => {
  let component: DayDescriptionComponent;
  let fixture: ComponentFixture<DayDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
