import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountAppComponent } from './count-app.component';

describe('CountAppComponent', () => {
  let component: CountAppComponent;
  let fixture: ComponentFixture<CountAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
