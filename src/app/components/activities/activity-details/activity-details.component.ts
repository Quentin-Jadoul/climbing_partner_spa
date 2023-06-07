import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/services/activities.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent {
  activity: any = {};
  activity_id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private ActivitiesService: ActivitiesService,
    private PlacesService: PlacesService
  ) { }

  ngOnInit(): void {
    this.activity_id = this.route.snapshot.params['id'];
    this.ActivitiesService.getActivity(this.activity_id).subscribe((data: any) => {
      this.activity = data;
      console.log(this.activity);
    });
  }

}
