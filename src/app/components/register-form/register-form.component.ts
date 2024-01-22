import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  

  form! : FormGroup;

  ngOnInit(){
    this.setFormValues();
  }

  setFormValues(){
    this.form = new FormGroup({
      email : new  FormControl("", [Validators.required, Validators.email]),
      phone : new FormControl("", [Validators.required, Validators.pattern ('[- +()0-9]{10,12}')]),
      password : new FormControl("",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ])
    });
  }


  register(){
    if(this.form.valid){
      // service backend call
      console.log("valid register!");
    } else {
      // error message
      this.form.markAllAsTouched();
      console.log("invalid register");
    }
    console.log(this.form);
  }

  login(){
    if(this.form.valid){
      // service backend call
      console.log("valid login!");
    } else {
      // error message
      this.form.markAllAsTouched();
      console.log("invalid login");
    }
    console.log(this.form);
  }
  }

