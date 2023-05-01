import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';

import { RouterModule } from '@angular/router';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
