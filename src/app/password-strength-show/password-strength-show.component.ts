import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PasswordService } from '../Services/password.service';

@Component({
  selector: 'app-password-strength-show',
  standalone: true,
  imports: [],
  templateUrl: './password-strength-show.component.html',
  styleUrl: './password-strength-show.component.scss',
})
export class PasswordStrengthShowComponent implements OnChanges {
  @Input() password: string | null | undefined = '';
  parts: number | undefined;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      const passwordService = new PasswordService();
      this.parts = passwordService.PasswordStrength(
        changes['password'].currentValue
      );
    }
  }
}
