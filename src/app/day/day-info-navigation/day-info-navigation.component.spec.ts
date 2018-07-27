import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInfoNavigationComponent } from './day-info-navigation.component';

describe('DayInfoNavigationComponent', () => {
  let component: DayInfoNavigationComponent;
  let fixture: ComponentFixture<DayInfoNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayInfoNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayInfoNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
