import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ApiHttpService } from './api-http.service';
import { AppComponent } from './app.component';
import { PlaceComponent } from './components/places/place/place.component';
import { PlaceUpdateComponent } from './components/places/place-update/place-update.component';
import { PlacesListComponent } from './components/places/places-list/places-list.component';
import { BoulderComponent } from './components/boulders/boulder/boulder.component';
import { BoulderCreateComponent } from './components/boulders/boulder-create/boulder-create.component';
import { BoulderUpdateComponent } from './components/boulders/boulder-update/boulder-update.component';
import { BouldersListComponent } from './components/boulders/boulders-list/boulders-list.component';
import { ActivitiesListComponent } from './components/activities/activities-list/activities-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    PlaceUpdateComponent,
    PlacesListComponent,
    BoulderComponent,
    BoulderCreateComponent,
    BoulderUpdateComponent,
    BouldersListComponent,
    ActivitiesListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'places-list', component: PlacesListComponent},
      {path: 'place/:id', component: PlaceComponent},
      {path: 'activities-list', component: ActivitiesListComponent},
    ]),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [ApiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
