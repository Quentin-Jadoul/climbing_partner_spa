import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(
    private apiHttpService: ApiHttpService,
  ) { }

  getActivitiesCount() {
    return this.apiHttpService.get('/activities/count');
  }

  getActivitiesByUserCount() {
    return this.apiHttpService.get('/activities/count?user_id=' + localStorage.getItem('user_id'));
  }

  // getActivities takes parameters to filter the results
  getActivities(size: number, offset: number) {
    return this.apiHttpService.get('/activities?size=' + size + '&offset=' + offset);
  }

  getActivity(activity_id: number) {
    return this.apiHttpService.get('/activity/' + activity_id);
  }

  getActivitiesByUser(size: number, offset: number) {
    if (localStorage.getItem('user_id') === null) {
      // we return an empty array
      return this.apiHttpService.get('/activities?size=0&offset=0');
    }
    return this.apiHttpService.get('/activities?size=' + size + '&offset=' + offset + '&user_id=' + localStorage.getItem('user_id'));
  }

  createActivity(activity: any) {
    return this.apiHttpService.post('/activity', activity);
  }

  updateActivity(activity_id: number, activity: any) {
    return this.apiHttpService.patch('/activity/' + activity_id, activity);
  }

  deleteActivity(activity_id: number) {
    return this.apiHttpService.delete('/activity/' + activity_id);
  }
}
