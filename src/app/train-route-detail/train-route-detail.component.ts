import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-train-route-detail',
  templateUrl: './train-route-detail.component.html',
  styleUrls: ['./train-route-detail.component.css']
})
export class TrainRouteDetailComponent implements OnInit {
  @Input() routes:Array<any>;
  constructor() { }

  ngOnInit() {
    
  }
  

}
