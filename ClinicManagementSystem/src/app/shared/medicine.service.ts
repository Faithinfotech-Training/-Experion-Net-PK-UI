import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import{MedicineForAnAppointment} from './medicine-for-an-appointment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  medicines: Medicine[];
  medicineForAnAppoint:MedicineForAnAppointment[];
  medAp:any;

  constructor(private httpClient:HttpClient) {
  }


  bindListMedicine(){
     this.httpClient.get(environment.apiUrl+'api/medicines/raw')
     .toPromise().then(
       response=>{
         this.medicines= response as Medicine[]
         alert(this.medicines);
       }
     )
   }

  

  
   bindListMedicineForAnAppointment(id:number){
    this.httpClient.get(environment.apiUrl+'api/MedicinePrescription/appointments/5')
    .toPromise().then(
      response=>{
        this.medicineForAnAppoint= response as MedicineForAnAppointment[];
        alert(this.medicineForAnAppoint);
      }
    )
  }
}
