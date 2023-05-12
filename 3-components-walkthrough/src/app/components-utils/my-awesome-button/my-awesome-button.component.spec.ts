import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeButtonComponent } from './my-awesome-button.component';

describe('MyAwesomeButtonComponent', () => {
  let component: MyAwesomeButtonComponent;
  let fixture: ComponentFixture<MyAwesomeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAwesomeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAwesomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
