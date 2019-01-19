import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFareEnquiryComponent } from './train-fare-enquiry.component';

describe('TrainFareEnquiryComponent', () => {
  let component: TrainFareEnquiryComponent;
  let fixture: ComponentFixture<TrainFareEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainFareEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFareEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
