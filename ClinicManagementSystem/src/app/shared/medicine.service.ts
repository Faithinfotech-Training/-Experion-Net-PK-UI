import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Medicine} from './medicine';
//import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {
medicines : Medicine[];
formDate: Medicine=new Medicine();

constructor(private httpClient : HttpClient) { }

  bindListMedicines(){
    this.httpClient.get(environment.apiUrl+'/api/medicines/raw')
    .toPromise().then(
      response =>{
        console.log("from service");
        this.medicines=response as Medicine[]
      }
    );
   }
}
