import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNormalUsersComponent } from './list-normal-users.component';

describe('ListNormalUsersComponent', () => {
  let component: ListNormalUsersComponent;
  let fixture: ComponentFixture<ListNormalUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNormalUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNormalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
