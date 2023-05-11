import { Component } from '@angular/core';
import { ApiHttpService } from '../../../api-http.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private usersService: UsersService) { }

  name: string = '';
  lastname: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  password2: string = '';

  usernameTaken: boolean = false;
  emailTaken: boolean = false;
  passwordError: string = '';

  onSubmit() {
    console.log('submit');
    this.checkPassword();
  }

  checkPassword() {
    if (this.password != this.password2) {
      this.passwordError = 'Passwords do not match';
      console.log('passwords do not match');
      return false;
    } else if (this.password.length < 8) {
      this.passwordError = 'Password too short';
      console.log('password too short');
      return false;
    } else {
      this.passwordError = '';
      console.log('password ok');
      return true;
    }
  }
}
