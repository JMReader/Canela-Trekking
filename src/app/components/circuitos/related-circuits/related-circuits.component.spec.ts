import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCircuitsComponent } from './related-circuits.component';

describe('RelatedCircuitsComponent', () => {
  let component: RelatedCircuitsComponent;
  let fixture: ComponentFixture<RelatedCircuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedCircuitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
