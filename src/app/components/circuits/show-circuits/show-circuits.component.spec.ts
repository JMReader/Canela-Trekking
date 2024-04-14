import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCircuitsComponent } from './show-circuits.component';

describe('ShowCircuitsComponent', () => {
  let component: ShowCircuitsComponent;
  let fixture: ComponentFixture<ShowCircuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCircuitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
