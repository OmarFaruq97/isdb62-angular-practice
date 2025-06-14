import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseEventsComponent } from './mouse-events.component';

describe('MouseEventsComponent', () => {
  let component: MouseEventsComponent;
  let fixture: ComponentFixture<MouseEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
