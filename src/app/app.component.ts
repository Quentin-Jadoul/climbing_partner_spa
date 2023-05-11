import { Component } from '@angular/core';
import { RegisterComponent } from './components/users/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'climbing_partner_spa';
  public current = 1;
  public total = 10;

  hero = {name: ''};
}
