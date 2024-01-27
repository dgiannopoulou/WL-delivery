import { Component } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-profile-avatar',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.css'
})
export class ProfileAvatarComponent {

}
