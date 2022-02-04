import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsForDoctorComponent } from './appointments-for-doctor.component';

describe('AppointmentsForDoctorComponent', () => {
  let component: AppointmentsForDoctorComponent;
  let fixture: ComponentFixture<AppointmentsForDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsForDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsForDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
