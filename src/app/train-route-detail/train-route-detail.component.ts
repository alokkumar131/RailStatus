import { Component, OnInit, Input } from '@angular/core';
import { TrainapiService } from '../trainapi.service';

@Component({
  selector: 'app-train-route-detail',
  templateUrl: './train-route-detail.component.html',
  styleUrls: ['./train-route-detail.component.css']
})
export class TrainRouteDetailComponent implements OnInit {
  @Input() routes:Array<any>;
 
  constructor(private _trainapiservice:TrainapiService) { }

  ngOnInit() {
    
  }
  isRoutes(){
    const token=this.routes[0];
    if(token!=undefined){
     return true;
    }else{
      return false;
    }

  
    
    
 }


  
  

}
