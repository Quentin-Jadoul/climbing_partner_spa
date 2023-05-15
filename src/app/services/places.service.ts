import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private apiHttpService: ApiHttpService) { }

  getPlacesCount(type: string, location: string, name: string) {
    return this.apiHttpService.get('/places/count?type=' + type + '&location=' + location + '&name=' + name);
  }

  // getPlaces takes parameters to filter the results
  getPlaces(size: number, offset: number, type: string, location: string, sort: string, name: string) {
    return this.apiHttpService.get('/places?size=' + size + '&offset=' + offset + '&type=' + type + '&location=' + location + '&sort=' + sort + '&name=' + name);
  }

  getPlace(place_id: number) {
    return this.apiHttpService.get('/place/' + place_id);
  }

  getPlacesNames() {
    return this.apiHttpService.get('/places/names');
  }
}
