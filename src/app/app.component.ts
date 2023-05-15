import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'climbing_partner_spa';
  public current = 1;
  public total = 10;

  token: any = null;

  state = 'login'

  constructor() { }
  
  ngOnInit() {
    this.token = localStorage.getItem('token');
  }
  
  ngDoCheck() {
    this.token = localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    this.token = null;
    // We reload the page to refresh the navbar
    window.location.reload();
  }

  onChildValueChange(newValue: string) {
    this.state = newValue;
  }
}
