import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdeskComponent } from './frontdesk.component';

describe('FrontdeskComponent', () => {
  let component: FrontdeskComponent;
  let fixture: ComponentFixture<FrontdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
