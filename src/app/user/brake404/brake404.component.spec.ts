import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brake404Component } from './brake404.component';

describe('Brake404Component', () => {
  let component: Brake404Component;
  let fixture: ComponentFixture<Brake404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brake404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brake404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
