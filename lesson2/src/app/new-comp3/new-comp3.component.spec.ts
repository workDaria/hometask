import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComp3Component } from './new-comp3.component';

describe('NewComp3Component', () => {
  let component: NewComp3Component;
  let fixture: ComponentFixture<NewComp3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComp3Component]
    });
    fixture = TestBed.createComponent(NewComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
