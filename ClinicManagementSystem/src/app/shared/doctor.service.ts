import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  appointments: Appointment[];

  constructor(private httpClient:HttpClient) {
  }


  bindListAppointment(){
     this.httpClient.get(environment.apiUrl+'api/doctors/appointments/3')
     .toPromise().then(
       response=>{
         this.appointments= response as Appointment[]
       }
     )
   }

}



