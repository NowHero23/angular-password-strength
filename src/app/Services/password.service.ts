export class PasswordService {
  public PasswordStrength(passwordValue: string) {
    if (passwordValue.length == 0) {
      return -1;
    }
    if (passwordValue.length < 8) {
      return 0;
    }
    let parts = 0;
    if (/\d/.test(passwordValue)) {
      parts += 1;
    }
    if (/[a-z]/.test(passwordValue)) {
      parts += 1;
    }
    if (/[A-Z]/.test(passwordValue)) {
      parts += 1;
    }
    return parts;
  }
}
