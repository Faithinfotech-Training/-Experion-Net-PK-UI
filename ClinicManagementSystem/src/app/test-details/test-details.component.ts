import { Component, OnInit } from '@angular/core';
import { TestDetailsService} from '../shared/test-details.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {
  page=1;
  filter="";

  constructor(public TestDetailsservice :TestDetailsService ) { }

  ngOnInit(): void {
    this.TestDetailsservice.bindListEmployees();
  }

}
