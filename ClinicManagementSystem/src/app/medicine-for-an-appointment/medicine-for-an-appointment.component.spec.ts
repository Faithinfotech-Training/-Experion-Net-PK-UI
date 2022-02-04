import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineForAnAppointmentComponent } from './medicine-for-an-appointment.component';

describe('MedicineForAnAppointmentComponent', () => {
  let component: MedicineForAnAppointmentComponent;
  let fixture: ComponentFixture<MedicineForAnAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineForAnAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineForAnAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
