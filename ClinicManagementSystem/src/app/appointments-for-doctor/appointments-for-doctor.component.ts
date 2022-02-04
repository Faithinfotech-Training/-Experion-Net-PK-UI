import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctor.service'


@Component({
  selector: 'app-appointments-for-doctor',
  templateUrl: './appointments-for-doctor.component.html',
  styleUrls: ['./appointments-for-doctor.component.scss']
})
export class AppointmentsForDoctorComponent implements OnInit {

  page:number=1;
  filter="";
  constructor(public doctorService : DoctorService) { }

  ngOnInit(): void {
  
    this.doctorService.bindListAppointment();
  }



  
}
