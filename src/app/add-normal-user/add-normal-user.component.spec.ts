import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNormalUserComponent } from './add-normal-user.component';

describe('AddNormalUserComponent', () => {
  let component: AddNormalUserComponent;
  let fixture: ComponentFixture<AddNormalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNormalUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNormalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
