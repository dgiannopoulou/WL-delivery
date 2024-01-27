import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';
import { Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {

  UserLoginService: UserLoginService = inject(UserLoginService);
  user: any;
  registerForm!: FormGroup;
  loginForm!: FormGroup;
  router: Router = inject(Router);
  logged?:boolean;
  @Output() actionEventEmitter = new EventEmitter();



  ngOnInit() {
    this.setFormValues();
    this.actionEventEmitter.emit(this.logged);

  }

  setFormValues() {
    this.registerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.pattern('[- +()0-9]{10,15}')]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ])
    });

    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });

  }

  register() {
    if (this.registerForm.valid) {
      let user = this.registerForm.value;
      console.log(user);

      this.UserLoginService.registerUser(user).subscribe(
        (user) => {
          this.user = user;
          console.log("valid register!");
          localStorage.setItem( 'logIn', 'true');
          this.logged=true;
          this.actionEventEmitter.emit(this.logged);
          this.registerForm.reset();
          this.router.navigate(['']);
        }
      );
    }
  }

  login() {
    if (this.loginForm.valid) {
      let user = this.loginForm.value;
      this.UserLoginService.loginUser(user).subscribe(
        (user) => {
          this.user = user;
          console.log("valid login!");
          console.log(user);
          localStorage.setItem( 'logIn', 'true');
          this.logged=true;
          this.actionEventEmitter.emit(this.logged);
          this.loginForm.reset();
          this.router.navigate(['']);
        }
      );
    }
  }


}