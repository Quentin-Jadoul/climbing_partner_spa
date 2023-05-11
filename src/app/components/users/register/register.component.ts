import { Component } from '@angular/core';
import { ApiHttpService } from '../../../api-http.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  password: string = '';
  user = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  };

  constructor( private usersService: UsersService) { }

  passwordError: string = '';
  emailError: string = '';
  usernameError: string = '';

  onSubmit() {
    if (this.checkPassword()) {
      this.usersService.register(this.user.firstname, this.user.lastname, this.user.email, this.user.username, this.user.password).subscribe({
        next: () => {
          document.getElementById('closeModal')?.click();
        },
        error: (error) => {
          if (!error.error.emailAvailable && !error.error.usernameAvailable) {
            this.emailError = 'Email is already taken';
            this.usernameError = 'Username is already taken';
          } else if (!error.error.emailAvailable) {
            this.emailError = 'Email is already taken';
            this.usernameError = '';
          }
          else if (!error.error.usernameAvailable) {
            this.usernameError = 'Username is already taken';
            this.emailError = '';
          }
        }
      });
    }
  }

  checkPassword() {
    if (this.user.password != this.user.password2) {
      this.passwordError = 'Passwords do not match';
      return false;
    } else if (this.user.password.length < 8) {
      this.passwordError = 'Password must be at least 8 characters long';
      return false;
    } else {
      this.passwordError = '';
      return true;
    }
  }
}
