import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainRouteDetailComponent } from './train-route-detail.component';

describe('TrainRouteDetailComponent', () => {
  let component: TrainRouteDetailComponent;
  let fixture: ComponentFixture<TrainRouteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainRouteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainRouteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
