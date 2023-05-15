import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { UserActivitiesComponent } from './components/activities/user-activities/user-activities.component';
import { ActivityUpdateComponent } from './components/activities/activity-update/activity-update.component';
import { ActivityCreateComponent } from './components/activities/activity-create/activity-create.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

import { MyInterceptor } from './my-interceptor';
import { ClimbsListComponent } from './components/climbs/climbs-list/climbs-list.component';
import { ClimbDetailsComponent } from './components/climbs/climb-details/climb-details.component';
import { ClimbUpdateComponent } from './components/climbs/climb-update/climb-update.component';
import { ClimbCreateComponent } from './components/climbs/climb-create/climb-create.component';
import { ClimbDeleteComponent } from './components/climbs/climb-delete/climb-delete.component';



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
    LoginComponent,
    RegisterComponent,
    UserActivitiesComponent,
    ActivityUpdateComponent,
    ActivityCreateComponent,
    ClimbsListComponent,
    ClimbDetailsComponent,
    ClimbUpdateComponent,
    ClimbCreateComponent,
    ClimbDeleteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'activities-list', pathMatch: 'full'},
      {path: 'places-list', component: PlacesListComponent},
      {path: 'place/:id', component: PlaceComponent},
      {path: 'activities-list', component: ActivitiesListComponent},
      {path: 'user-activities', component: UserActivitiesComponent},
      {path: 'activity/create', component: ActivityCreateComponent},
    ]),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [
    ApiHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
