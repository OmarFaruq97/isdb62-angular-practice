import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelArrayComponent } from './tabel-array.component';

describe('TabelArrayComponent', () => {
  let component: TabelArrayComponent;
  let fixture: ComponentFixture<TabelArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
