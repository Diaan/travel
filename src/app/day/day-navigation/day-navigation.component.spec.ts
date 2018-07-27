import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNavigationComponent } from './day-navigation.component';

describe('DayNavigationComponent', () => {
  let component: DayNavigationComponent;
  let fixture: ComponentFixture<DayNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
