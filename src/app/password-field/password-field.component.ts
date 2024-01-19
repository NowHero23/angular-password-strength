import { Component } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss',
})
export class PasswordFieldComponent {
  private passwordSubject = new Subject<string>();
  password = '';

  parts = 0;

  constructor() {
    this.passwordSubject.pipe(debounceTime(200)).subscribe((passwordValue) => {
      this.password = passwordValue;
      this.parts = 0;
      if (passwordValue.match('([0-9])')) {
        this.parts += 1;
      }
      if (passwordValue.match('([a-z])')) {
        this.parts += 1;
      }
      if (passwordValue.match('([A-Z])')) {
        this.parts += 1;
      }
    });
  }

  onUpdate(e: any) {
    this.passwordSubject.next(e.target.value);
  }
}
