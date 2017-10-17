import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisibleInputComponent } from './invisible-input.component';

describe('InvisibleInputComponent', () => {
  let component: InvisibleInputComponent;
  let fixture: ComponentFixture<InvisibleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvisibleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvisibleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
