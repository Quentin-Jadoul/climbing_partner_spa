import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlacesListComponent } from './components/places/places-list/places-list.component';
import { ActivitiesListComponent } from './components/activities/activities-list/activities-list.component';

import { ApiHttpService } from './api-http.service';


@NgModule({
  declarations: [
    AppComponent,
    PlacesListComponent,
    ActivitiesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'places-list', component: PlacesListComponent},
      {path: 'activities-list', component: ActivitiesListComponent},
    ]),
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
