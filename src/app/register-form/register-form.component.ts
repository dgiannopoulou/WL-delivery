import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      firstname: new FormControl(),
      lastname : new  FormControl(),
      phone : new FormControl("", Validators.required),
      password : new FormControl("",Validators.required)
    });
  }

  submit(){
    console.log("hello");
    console.log(this.form);
    
  }

  register(){
    console.log("register");
    console.log(this.form);
  }

  login(){
    console.log("login");
    console.log(this.form);
  }

}
