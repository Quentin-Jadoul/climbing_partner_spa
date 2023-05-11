import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private apiHttpService: ApiHttpService) { }

  getActivitiesCount() {
    return this.apiHttpService.get('/activities/count');
  }

  // getActivities takes parameters to filter the results
  getActivities(size: number, offset: number) {
    return this.apiHttpService.get('/activities?size=' + size + '&offset=' + offset);
  }

  getActivity(activity_id: number) {
    return this.apiHttpService.get('/activity/' + activity_id);
  }
}
