import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css']
})
export class ActivityCreateComponent {

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
  ) {}

  ngOnInit(): void {
    this.PlacesService.getPlacesNames().subscribe((data: any) => {
      this.places = data;
    });
  }
  
  
  createActivity() {
    // We combine date and time and convert to ISO format
    this.activity.date = new Date(this.activity.date + 'T' + this.time_string + ':00').toISOString();
    this.ActivitiesService.createActivity(this.activity).subscribe((data: any) => {
      this.activity_id = data.activity_id;
      this.step = 1;
    });
  }
}
