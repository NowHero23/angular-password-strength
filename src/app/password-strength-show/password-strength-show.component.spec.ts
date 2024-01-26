import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthShowComponent } from './password-strength-show.component';

describe('PasswordStrengthShowComponent', () => {
  let component: PasswordStrengthShowComponent;
  let fixture: ComponentFixture<PasswordStrengthShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStrengthShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
