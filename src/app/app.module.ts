import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ApiHttpService } from './api-http.service';
import { AppComponent } from './app.component';

import { PlaceComponent } from './components/places/place/place.component';
import { PlacesListComponent } from './components/places/places-list/places-list.component';

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
import { ClimbUpdateComponent } from './components/climbs/climb-update/climb-update.component';
import { ClimbCreateComponent } from './components/climbs/climb-create/climb-create.component';
import { ActivityDetailsComponent } from './components/activities/activity-details/activity-details.component';



@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    PlacesListComponent,
    ActivitiesListComponent,
    LoginComponent,
    RegisterComponent,
    UserActivitiesComponent,
    ActivityUpdateComponent,
    ActivityCreateComponent,
    ClimbsListComponent,
    ClimbUpdateComponent,
    ClimbCreateComponent,
    ActivityDetailsComponent,
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
      {path: 'activity/update/:id', component: ActivityUpdateComponent},
      {path: 'activity/:id', component: ActivityDetailsComponent},
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
