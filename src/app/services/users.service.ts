import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiHttpService: ApiHttpService) { }

  register(firstname: string, lastname: string, email: string, username: string, password: string) {
    return this.apiHttpService.post('/user', { firstname: firstname, lastname: lastname, email: email, username: username, password: password });
  }

  login(username: string, password: string) {
    return this.apiHttpService.post('/user/login', { username: username, password: password });
  }

}
