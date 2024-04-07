import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { notOnlyWhitespace } from '../../../utils/checkWhitespaces';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css',
})
export class OrderFormComponent {
  constructor(private http: HttpClient) {}

  orderForm!: FormGroup;

  ngOnInit() {
    this.orderForm = new FormGroup({
      name: new FormControl(null, [Validators.required, notOnlyWhitespace]),
      address: new FormControl(null, [Validators.required, notOnlyWhitespace]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+7|7|8)+([0-9]){10})$'),
        notOnlyWhitespace,
      ]),
    });
  }

  preventDot(event: KeyboardEvent): void {
    if (event.key === '.') {
      event.preventDefault();
    }
  }

  onlyNumberKey(event: KeyboardEvent) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  onSubmit() {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const trimmedFormValues = {
      name: this.orderForm.value.name.trim(),
      address: this.orderForm.value.address.trim(),
      phone: this.orderForm.value.phone.trim(),
    };

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', trimmedFormValues)
      .subscribe(
        (response) => {
          window.alert('Спасибо за заказ');
          this.orderForm.reset();
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
