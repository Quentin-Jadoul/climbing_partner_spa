import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { ActivitiesService } from 'src/app/services/activities.service';
import { ClimbsService } from 'src/app/services/climbs.service';
import { BouldersService } from 'src/app/services/boulders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.css']
})
export class ActivityUpdateComponent {
  
  activity = {
    name: '',
    description: '',
    user_id: localStorage.getItem('user_id'),
    date: '',
    duration: '',
  };

  time_string = '';
  time = {hour: 0, minute: 0};

  place_id: number = 0;
  activity_id: number = 0;

  places = [
    {
      place_id: 0,
      name: ''
    },
  ];

  step = 0;

  constructor(
    private PlacesService: PlacesService,
    private ActivitiesService: ActivitiesService,
    private ClimbsService: ClimbsService,
    private BouldersService: BouldersService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activity_id = this.route.snapshot.params['id'];
    this.getPlaceIdByActivity();
    this.ActivitiesService.getActivity(this.activity_id).subscribe((data: any) => {
      this.activity = data;
      this.time_string = this.activity.date.split('T')[1].split(':')[0] + ':' + this.activity.date.split('T')[1].split(':')[1];
      this.activity.date = this.activity.date.split('T')[0];
    });
    this.PlacesService.getPlacesNames().subscribe((data: any) => {
      this.places = data;
    });
  }

  updateActivity() {
    this.activity.date = new Date(this.activity.date + 'T' + this.time_string + ':00').toISOString();
    this.ActivitiesService.updateActivity(this.activity_id, this.activity).subscribe((data: any) => {
      this.step = 1;
    });
  }

  getPlaceIdByActivity() {
    this.ClimbsService.getClimbsByActivityId(this.activity_id).subscribe((climbs: any) => {
      if (climbs && climbs.length > 0) {
        const climb = climbs[0];
        const boulder_id = climb.boulder_id;
        this.BouldersService.getBoulder(boulder_id).subscribe((boulder: any) => {
          this.place_id = boulder.place_id;
        });
      }
    });
  }
}
