import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class ClimbsService {

  constructor(private apiHttpService: ApiHttpService) { }

  getClimbsByActivityId(activityId: number) {
    return this.apiHttpService.get('/climbs/activity/' + activityId);
  }

  createClimb(climb: any) {
    return this.apiHttpService.post('/climb', climb);
  }
}
