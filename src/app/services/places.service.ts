import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private apiHttpService: ApiHttpService) { }

  url = 'http://pat.infolab.ecam.be:60842';

  getPlacesCount() {
    return this.apiHttpService.get(this.url + '/places/count');
  }

  // getPlaces takes parameters to filter the results
  getPlaces(size: number, offset: number, type: string, location: string, sort: string, name: string) {
    return this.apiHttpService.get(this.url + '/places?size=' + size + '&offset=' + offset + '&type=' + type + '&location=' + location + '&sort=' + sort + '&name=' + name);
  }
}
