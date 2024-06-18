import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInAngularComponent } from './forms-in-angular.component';

describe('FormsInAngularComponent', () => {
  let component: FormsInAngularComponent;
  let fixture: ComponentFixture<FormsInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsInAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
