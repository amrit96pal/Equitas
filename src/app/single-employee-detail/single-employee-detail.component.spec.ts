import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeeDetailComponent } from './single-employee-detail.component';

describe('SingleEmployeeDetailComponent', () => {
  let component: SingleEmployeeDetailComponent;
  let fixture: ComponentFixture<SingleEmployeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEmployeeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
