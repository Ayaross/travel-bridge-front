import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdVerificationComponent } from './id-verification.component';

describe('IdVerificationComponent', () => {
  let component: IdVerificationComponent;
  let fixture: ComponentFixture<IdVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdVerificationComponent]
    });
    fixture = TestBed.createComponent(IdVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
