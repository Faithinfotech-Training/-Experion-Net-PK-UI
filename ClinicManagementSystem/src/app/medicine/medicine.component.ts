import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../shared/medicine.service'
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  page:number=1;
  filter="";
  constructor(public medService : MedicineService) { }

  ngOnInit(): void {

    this.medService.bindListMedicine();
  }
}
