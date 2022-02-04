import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TestReport } from './test-report';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testReports: TestReport[];

  constructor(private httpClient:HttpClient) {
  }


  bindListTestReport(id:number){
     this.httpClient.get(environment.apiUrl+'api/testreport/appointment/'+id)
     .toPromise().then(
       response=>{
         this.testReports= response as TestReport[]
         alert(this.testReports);
       }
     )
   }
}
