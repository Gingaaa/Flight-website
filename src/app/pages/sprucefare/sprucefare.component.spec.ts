import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprucefareComponent } from './sprucefare.component';

describe('SprucefareComponent', () => {
  let component: SprucefareComponent;
  let fixture: ComponentFixture<SprucefareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprucefareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprucefareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
