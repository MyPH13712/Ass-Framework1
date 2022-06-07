import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProDetailComponent } from './admin-pro-detail.component';

describe('AdminProDetailComponent', () => {
  let component: AdminProDetailComponent;
  let fixture: ComponentFixture<AdminProDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
