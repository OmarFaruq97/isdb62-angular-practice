import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdFlagComponent } from './bd-flag.component';

describe('BdFlagComponent', () => {
  let component: BdFlagComponent;
  let fixture: ComponentFixture<BdFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BdFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
