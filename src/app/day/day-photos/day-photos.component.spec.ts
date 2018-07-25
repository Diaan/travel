import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPhotosComponent } from './day-photos.component';

describe('DayPhotosComponent', () => {
  let component: DayPhotosComponent;
  let fixture: ComponentFixture<DayPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
