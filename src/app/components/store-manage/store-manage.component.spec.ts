import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreManageComponent } from './store-manage.component';

describe('StoreManageComponent', () => {
  let component: StoreManageComponent;
  let fixture: ComponentFixture<StoreManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreManageComponent]
    });
    fixture = TestBed.createComponent(StoreManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
