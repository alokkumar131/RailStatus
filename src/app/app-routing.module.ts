import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PnrStatusComponent } from './pnr-status/pnr-status.component';
import { HomeComponent } from './home/home.component';
import { TrainRouteComponent } from './train-route/train-route.component';
import { SeatAvailabilityComponent } from './seat-availability/seat-availability.component';
import { TrainBetweenStationsComponent } from './train-between-stations/train-between-stations.component';
import { TrainNameNumberComponent } from './train-name-number/train-name-number.component';
import { TrainFareEnquiryComponent } from './train-fare-enquiry/train-fare-enquiry.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pnr-status',component:PnrStatusComponent},
  {path:'train-route',component:TrainRouteComponent},
  {path:'seat-availability',component:SeatAvailabilityComponent},
  {path:'train-between-stations',component:TrainBetweenStationsComponent},
  {path:'train-name-number',component:TrainNameNumberComponent},
  {path:'train-fare-enquiry',component:TrainFareEnquiryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
