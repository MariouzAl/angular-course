import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeLabelComponent } from './my-awesome-label.component';

describe('MyAwesomeLabelComponent', () => {
  let component: MyAwesomeLabelComponent;
  let fixture: ComponentFixture<MyAwesomeLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAwesomeLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAwesomeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
