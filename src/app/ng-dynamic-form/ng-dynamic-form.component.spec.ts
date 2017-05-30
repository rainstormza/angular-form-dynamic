import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDynamicFormComponent } from './ng-dynamic-form.component';

describe('NgDynamicFormComponent', () => {
  let component: NgDynamicFormComponent;
  let fixture: ComponentFixture<NgDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
