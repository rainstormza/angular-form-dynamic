import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormArrayComponent } from './ng-form-array.component';

describe('NgFormArrayComponent', () => {
  let component: NgFormArrayComponent;
  let fixture: ComponentFixture<NgFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
