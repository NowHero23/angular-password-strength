import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordFieldComponent } from './password-field/password-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-password-strength';
}
