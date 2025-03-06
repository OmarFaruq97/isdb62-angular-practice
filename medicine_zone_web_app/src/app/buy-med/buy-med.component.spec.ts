import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMedComponent } from './buy-med.component';

describe('BuyMedComponent', () => {
  let component: BuyMedComponent;
  let fixture: ComponentFixture<BuyMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyMedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
