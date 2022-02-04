import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../shared/medicine.service';

@Component({
  selector: 'app-medicine-for-an-appointment',
  templateUrl: './medicine-for-an-appointment.component.html',
  styleUrls: ['./medicine-for-an-appointment.component.scss']
})
export class MedicineForAnAppointmentComponent implements OnInit {

  page:number=1;
  filter="";
  data:any;
  constructor(public medService : MedicineService) { }

  ngOnInit(): void {
    this.medService.bindListMedicineForAnAppointment(5);
  }




}
