import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PnrStatusComponent } from './pnr-status/pnr-status.component';
import { HomeComponent } from './home/home.component';
import { TrainRouteComponent } from './train-route/train-route.component';
import { SeatAvailabilityComponent } from './seat-availability/seat-availability.component';
import { TrainBetweenStationsComponent } from './train-between-stations/train-between-stations.component';
import { TrainNameNumberComponent } from './train-name-number/train-name-number.component';
import { TrainFareEnquiryComponent } from './train-fare-enquiry/train-fare-enquiry.component';
import { TrainRouteDetailComponent } from './train-route-detail/train-route-detail.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PnrStatusComponent,
    HomeComponent,
    TrainRouteComponent,
    SeatAvailabilityComponent,
    TrainBetweenStationsComponent,
    TrainNameNumberComponent,
    TrainFareEnquiryComponent,
    TrainRouteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
