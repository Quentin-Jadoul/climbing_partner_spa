import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private usersService: UsersService) { }

  username: string = '';
  password: string = '';

  errorMessage: string = '';

  onSubmit() {
    this.usersService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        document.getElementById('closeLoginModal')?.click();
        // We store the token in the localStorage
        localStorage.setItem('token', response.token);
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      }
    });
  }


}
