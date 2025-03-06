import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMedComponent } from './all-med.component';

describe('AllMedComponent', () => {
  let component: AllMedComponent;
  let fixture: ComponentFixture<AllMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
