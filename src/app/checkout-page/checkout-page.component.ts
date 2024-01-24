import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  form!: FormGroup;
  isCardPaymentActive: boolean = false;

  constructor() {
    this.setFormValues();
    this.listenForPaymentMethodChange();
  }

  setFormValues() {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", Validators.required),
      address2: new FormControl("", Validators.required),
      zip: new FormControl("", Validators.required),
      shippingAddress: new FormControl(""),
      saveInformation: new FormControl(""),
      paymentMethod: new FormControl("", Validators.required),
      nameOnCard: new FormControl("", Validators.required),
      creditCardNumber: new FormControl("", Validators.required),
      expiration: new FormControl("", Validators.required),
      cvv: new FormControl("", Validators.required)
    });
    // disabling as you dont need them enabled in the beginning
    this.form.get("nameOnCard")?.disable();
    this.form.get("creditCardNumber")?.disable();
    this.form.get("expiration")?.disable();
    this.form.get("cvv")?.disable();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("valid!");
    } else {
      console.log("invalid");
    }
    console.log(this.form.value)
    console.log(this.form);
  }

  listenForPaymentMethodChange() {
      this.form.get('paymentMethod')?.valueChanges.subscribe(value => {
        // This callback will be triggered when the user selects a different option
        console.log('Selected payment method:', value);
        this.setPaymentMethodCard(value)
      });
  }

  setPaymentMethodCard(value: string){
    if(value === "debitCard" || value === "creditCard"){
      this.isCardPaymentActive = true;
      this.form.get("nameOnCard")?.enable();
      this.form.get("creditCardNumber")?.enable();
      this.form.get("expiration")?.enable();
      this.form.get("cvv")?.enable();
    } else {
      this.isCardPaymentActive = false;
      this.form.get("nameOnCard")?.disable();
      this.form.get("creditCardNumber")?.disable();
      this.form.get("expiration")?.disable();
      this.form.get("cvv")?.disable();
    }
  }
}
