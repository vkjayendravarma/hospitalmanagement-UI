import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientComponent } from './editpatient.component';

describe('EditpatientComponent', () => {
  let component: EditpatientComponent;
  let fixture: ComponentFixture<EditpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
