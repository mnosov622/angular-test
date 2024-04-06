import { FormControl, ValidationErrors } from '@angular/forms';

export function notOnlyWhitespace(
  control: FormControl
): ValidationErrors | null {
  const isWhitespace = (control.value || '').match(/^[\s]*$/);
  const isValid = !isWhitespace;
  return isValid ? null : { whitespace: true };
}
