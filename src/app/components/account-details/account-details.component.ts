import { Component, inject } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {

  UserLoginService: UserLoginService = inject(UserLoginService);

  router: Router = inject(Router);
  editForm!: FormGroup;
  user: any;


  ngOnInit() {
    this.setFormValues();
    this.UserLoginService.viewProfile()
      .subscribe(
        {
          next: data => {
            this.user = data
            this.updateFormValues();
          }
        }
      );
  }

  setFormValues() {
    this.editForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.pattern('[- +()0-9]{10,12}')]),
    });
  }

  updateFormValues() {
    this.editForm.patchValue({
      name: this.user.name,
      lastName: this.user.lastName,
      email: this.user.email,
      phone: this.user.phone
    });
  }

  editAccount() {
    if (this.editForm.valid) {
      let newuser = this.editForm.value;
      this.UserLoginService.editProfile(newuser).subscribe(
        user => {
          this.user = user;
          console.log("valid edit!");
          this.resetEditForm();
        }
      );
    } 
  }

  resetEditForm() {
    this.editForm.reset({
      name: this.user.name,
      lastName: this.user.lastName,
      email: this.user.email,
      phone: this.user.phone
    });
  }

}
