import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiHttpService: ApiHttpService) { }

  url = 'http://pat.infolab.ecam.be:60842';

  checkEmail(email: string) {
    return this.apiHttpService.get(this.url + '/user/check/email/' + email);
  }

  checkUsername(username: string) {
    return this.apiHttpService.get(this.url + '/user/check/username/' + username);
  }

  register(name: string, email: string, username: string, password: string) {
    return this.apiHttpService.post(this.url + '/user/register', { name: name, email: email, username: username, password: password });
  }

}
