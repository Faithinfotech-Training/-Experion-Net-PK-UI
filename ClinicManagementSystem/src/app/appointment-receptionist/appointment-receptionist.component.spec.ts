import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentReceptionistComponent } from './appointment-receptionist.component';

describe('AppointmentReceptionistComponent', () => {
  let component: AppointmentReceptionistComponent;
  let fixture: ComponentFixture<AppointmentReceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentReceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
