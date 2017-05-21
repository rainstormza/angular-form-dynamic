import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulldownComponent } from './pulldown.component';

describe('PulldownComponent', () => {
  let component: PulldownComponent;
  let fixture: ComponentFixture<PulldownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulldownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
