import { Component, inject } from '@angular/core';
import { AccountMenuComponent } from '../account-menu/account-menu.component';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [AccountMenuComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  changePasswordForm!: FormGroup;
  UserLoginService: UserLoginService = inject(UserLoginService);
  router: Router = inject(Router);



  ngOnInit() {
    this.setFormValues();

  }

  setFormValues() {
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl("", Validators.required),
      newPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ])
    });

  }

  changePassword() {
    if (this.changePasswordForm.valid) {
      let values = this.changePasswordForm.value;
      this.UserLoginService.editPassword(values).subscribe(
        next => {
          console.log("valid edit!");
          this.changePasswordForm.reset();
        }
      );
    } 
  }
}
