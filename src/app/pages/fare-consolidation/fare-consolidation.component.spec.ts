import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareConsolidationComponent } from './fare-consolidation.component';

describe('FareConsolidationComponent', () => {
  let component: FareConsolidationComponent;
  let fixture: ComponentFixture<FareConsolidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareConsolidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FareConsolidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
