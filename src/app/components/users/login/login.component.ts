import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() childValue: string = '';
  @Output() valueChanged = new EventEmitter<string>();

  constructor( private usersService: UsersService) { }

  username: string = '';
  password: string = '';

  errorMessage: string = '';

  onSubmit() {
    this.usersService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        document.getElementById('closeLoginModal')?.click();
        localStorage.setItem('user_id', response.user_id);
        localStorage.setItem('token', response.token);
        window.location.reload();
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      }
    });
    // We reload the page to refresh the navbar
  }

  register() {
    this.childValue = 'register';
    this.valueChanged.emit(this.childValue);
  }
}
