import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class BouldersService {

  constructor(private apiHttpService: ApiHttpService) { }

  getBouldersByPlace(place_id: number, size: number | null, offset: number | null, minGrade: string | null, maxGrade: string | null, type: string | null,status: string | null) {
    return this.apiHttpService.get('/boulders/place/' + place_id + '?size=' + size + '&offset=' + offset + '&minGrade=' + minGrade + '&maxGrade=' + maxGrade + '&type=' + type + '&status=' + status);
  }

  getBouldersByPlaceV2(place_id: number) {
    return this.apiHttpService.get('/boulders/place/' + place_id);
  }

  getBouldersByPlaceCount(place_id: number, minGrade: string, maxGrade: string, type: string,status: string) {
    return this.apiHttpService.get('/boulders/place/' + place_id + '/count?minGrade=' + minGrade + '&maxGrade=' + maxGrade + '&type=' + type + '&status=' + status);
  }

  getBoulder(boulder_id: number) {
    return this.apiHttpService.get('/boulder/' + boulder_id);
  }


}
