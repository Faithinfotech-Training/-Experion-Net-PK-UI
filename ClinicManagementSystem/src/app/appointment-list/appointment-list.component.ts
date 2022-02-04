import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../shared/medicine.service';
import { ReceptionistService } from '../shared/receptionist.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  page:number=1;
  filter="";
  constructor(public receptionistService : ReceptionistService,public medService : MedicineService) { }
  
  ngOnInit(): void {

    this.receptionistService.bindListAppointment();
  }

  OnClick(){
    this.medService.bindListMedicineForAnAppointment(2);
  }

  
}
