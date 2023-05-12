import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeCounterComponent } from './awesome-counter.component';

describe('AwesomeCounterComponent', () => {
  let component: AwesomeCounterComponent;
  let fixture: ComponentFixture<AwesomeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwesomeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
