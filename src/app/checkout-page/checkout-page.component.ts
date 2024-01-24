import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  form!: FormGroup;

  ngOnInIt(){
this.setFormValues();

  }

  setFormValues(){
this.form = new FormGroup({
  firstName: new FormControl("", Validators.required),
  lastName: new FormControl("", Validators.required),
  username: new FormControl("", Validators.required),
  email: new  FormControl("", [Validators.required, Validators.email]),
  address: new FormControl("", Validators.required),
  zip: new FormControl("", Validators.required)
});

  }

  onSubmit(){
    if(this.form.valid){
console.log("valid!");

    } else {
      console.log("invalid");

    }
    
    console.log(this.form);
    
  }
}
