import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class BouldersService {

  constructor(private apiHttpService: ApiHttpService) { }

  getBouldersByPlace(place_id: number, size: number, offset: number, minGrade: string, maxGrade: string, type: string,status: string) {
    return this.apiHttpService.get('/boulders/place/' + place_id + '?size=' + size + '&offset=' + offset + '&minGrade=' + minGrade + '&maxGrade=' + maxGrade + '&type=' + type + '&status=' + status);
  }

  getBouldersByPlaceCount(place_id: number, minGrade: string, maxGrade: string, type: string,status: string) {
    return this.apiHttpService.get('/boulders/place/' + place_id + '/count?minGrade=' + minGrade + '&maxGrade=' + maxGrade + '&type=' + type + '&status=' + status);
  }


}
