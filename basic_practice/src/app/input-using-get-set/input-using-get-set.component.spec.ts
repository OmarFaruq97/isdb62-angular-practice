import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUsingGetSetComponent } from './input-using-get-set.component';

describe('InputUsingGetSetComponent', () => {
  let component: InputUsingGetSetComponent;
  let fixture: ComponentFixture<InputUsingGetSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputUsingGetSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputUsingGetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
