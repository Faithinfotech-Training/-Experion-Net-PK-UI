import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import {HttpClientModule} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {ReceptionistService} from './shared/receptionist.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppointmentsForDoctorComponent } from './appointments-for-doctor/appointments-for-doctor.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicineForAnAppointmentComponent } from './medicine-for-an-appointment/medicine-for-an-appointment.component';
import { TestReportComponent } from './test-report/test-report.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TestsComponent } from './tests/tests.component'

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    NavBarComponent,
    AppointmentsForDoctorComponent,
    MedicineComponent,
    MedicineForAnAppointmentComponent,
    TestReportComponent,
    NavMenuComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [ReceptionistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
