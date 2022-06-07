import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProFormComponent } from './admin-pro-form.component';

describe('AdminProFormComponent', () => {
  let component: AdminProFormComponent;
  let fixture: ComponentFixture<AdminProFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
