import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestDetails } from './test-details';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TestDetailsService {
  testDetails:TestDetails[];
  formData: TestDetails = new TestDetails();


  constructor(private httpclient:HttpClient) { }
  bindListEmployees() {
    this.httpclient.get(environment.apiUrl + 'api/tests/raw')
      .toPromise()
      .then(response => { this.testDetails = response as TestDetails[] 
});
}
}
