import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { PasswordStrengthShowComponent } from './password-strength-show/password-strength-show.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PasswordFieldComponent,
    PasswordStrengthShowComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-password-strength';

  public formGroup = new FormGroup({
    password: new FormControl(''),
  });
}
