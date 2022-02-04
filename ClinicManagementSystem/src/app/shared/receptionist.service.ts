import { Injectable } from '@angular/core';
import{Appointment} from './appointment'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  appointments:Appointment[];

  constructor(private httpClient:HttpClient) {
   }

  


    

   bindListAppointment(){
      this.httpClient.get(environment.apiUrl+'api/Appointments')
      .toPromise().then(
        response=>{
          this.appointments= response as Appointment[]
        }
      )
    }

}
