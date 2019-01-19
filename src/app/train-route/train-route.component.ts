import { Component, OnInit, ViewChild } from '@angular/core';
import { TrainapiService } from '../trainapi.service';

@Component({
  selector: 'app-train-route',
  templateUrl: './train-route.component.html',
  styleUrls: ['./train-route.component.css']
})
export class TrainRouteComponent implements OnInit {
  public routes:Array<any>=[];
  public trains:Array<any>=[];
  public trainname:Array<any>=[];
  @ViewChild('userForm') formValues;


  constructor(private _trainapiservice:TrainapiService) { }

  ngOnInit() {
  }
  getRoute(value:any){
    this._trainapiservice.fetchRoute(value)
    .subscribe(result=>{
      result.route.forEach((res)=>{
        this.trains.push(res);
      })
      this.trainname.push(result.train);
      console.log(result);
       this.routes.push(this.trains);
       this.routes.push(this.trainname);
       console.log(this.routes);
    })
    this.formValues.reset();
  }
  valuechange(newValue) {
    this.routes=[];
    this.trains=[];
    this.trainname=[];
    
  }

}
