import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AdminComponent } from './admin/admin.component';
import { MainBodyComponent } from './admin/main-body/main-body.component';
import { TopNavComponent } from './admin/top-nav/top-nav.component';
import { SideNavCommanComponent } from './side-nav-comman/side-nav-comman.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OtherRegComponent } from './admin/main-body/other-reg/other-reg.component';
import { DoctorRegComponent } from './admin/main-body/doctor-reg/doctor-reg.component';
import { DoctorMainBodyComponent } from './doctor/doctor-main-body/doctor-main-body.component';
import { LoginComponent } from './login/login.component';
import {GeneralService} from './shared/general.service';
import{ MedicineComponent } from './doctor/doctor-main-body/medicine/medicine.component'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import{MedicineService} from './shared/medicine.service';
import { ConsultingComponent } from './doctor/doctor-main-body/consulting/consulting.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainBodyComponent,
    TopNavComponent,
    SideNavCommanComponent,
    DoctorComponent,
    OtherRegComponent,
    DoctorRegComponent,
    DoctorMainBodyComponent,
    LoginComponent,
    MedicineComponent,
    ConsultingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [GeneralService,MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
