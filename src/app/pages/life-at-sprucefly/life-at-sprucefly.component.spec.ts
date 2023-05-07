import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtSpruceflyComponent } from './life-at-sprucefly.component';

describe('LifeAtSpruceflyComponent', () => {
  let component: LifeAtSpruceflyComponent;
  let fixture: ComponentFixture<LifeAtSpruceflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeAtSpruceflyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAtSpruceflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
