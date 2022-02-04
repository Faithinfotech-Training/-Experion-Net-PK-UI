import { Component, OnInit } from '@angular/core';
import{TestService} from '../shared/test.service'
@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss']
})
export class TestReportComponent implements OnInit {

  page:number=1;
  filter="";
  constructor(public testService : TestService) { }

  ngOnInit(): void {
    this.testService.bindListTestReport(5);
  }
}