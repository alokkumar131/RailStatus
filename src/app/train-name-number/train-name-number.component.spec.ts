import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainNameNumberComponent } from './train-name-number.component';

describe('TrainNameNumberComponent', () => {
  let component: TrainNameNumberComponent;
  let fixture: ComponentFixture<TrainNameNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainNameNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainNameNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
