import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilsanComponent } from './tilsan.component';

describe('TilsanComponent', () => {
  let component: TilsanComponent;
  let fixture: ComponentFixture<TilsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilsanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
