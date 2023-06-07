import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/services/activities.service';
import { PlacesService } from 'src/app/services/places.service';
import { ClimbsService } from 'src/app/services/climbs.service';
import { BouldersService } from 'src/app/services/boulders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent {
  activity: any = {};
  activity_id: number = 0;
  place_id: number = 0;
  place_name: string = '';

  constructor(
    private route: ActivatedRoute,
    private ActivitiesService: ActivitiesService,
    private PlacesService: PlacesService,
    private ClimbsService: ClimbsService,
    private BouldersService: BouldersService,
  ) { }

  ngOnInit(): void {
    this.activity_id = this.route.snapshot.params['id'];
    this.ActivitiesService.getActivity(this.activity_id).subscribe((data: any) => {
      this.activity = data;
      this.getPlaceNameByActivity();
    });
  }

  getPlaceNameByActivity() {
    this.ClimbsService.getClimbsByActivityId(this.activity_id).subscribe((climbs: any) => {
      if (climbs && climbs.length > 0) {
        const climb = climbs[0];
        const boulder_id = climb.boulder_id;
        this.BouldersService.getBoulder(boulder_id).subscribe((boulder: any) => {
          this.place_id = boulder.place_id;
          this.PlacesService.getPlace(this.place_id).subscribe((place: any) => {
            this.place_name = place.name;
          }
          );
        });
      }
    });
  }

}
