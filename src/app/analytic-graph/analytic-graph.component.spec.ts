import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticGraphComponent } from './analytic-graph.component';

describe('AnalyticGraphComponent', () => {
  let component: AnalyticGraphComponent;
  let fixture: ComponentFixture<AnalyticGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
