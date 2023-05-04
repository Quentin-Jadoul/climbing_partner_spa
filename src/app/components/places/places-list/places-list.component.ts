import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';


@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  placesPerPage = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage: number = 1;
  totalPlaces: number = 0;

  name: string = '';
  location: string = '';
  type: string = '';
  sort: string = '';

  places: any = [];

  constructor(
    private PlacesService: PlacesService,

  ) { }

  ngOnInit(): void {
    this.PlacesService.getPlacesCount(this.type, this.location, this.name).subscribe((data: any) => {
      this.totalPlaces = data.count;
      this.showPage(1);
    });
  }

  onSubmit() {
    this.PlacesService.getPlaces(this.placesPerPage, this.currentPage - 1, this.type, this.location, this.sort, this.name).subscribe((data: any) => {
      this.places = data;
    });
    this.PlacesService.getPlacesCount(this.type, this.location, this.name).subscribe((data: any) => {
      this.totalPlaces = data.count;
    });
  }

  showPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.PlacesService.getPlaces(this.placesPerPage, this.currentPage - 1, this.type, this.location, this.sort, this.name).subscribe((data: any) => {
      this.places = data;
    });
  }

  onPageChange(event: any) {
    this.placesPerPage = event.pageSize;
    this.showPage(event.pageIndex + 1);
  }

  sortData(event: any) {
    this.sort = event
    this.PlacesService.getPlaces(this.placesPerPage, this.currentPage - 1, this.type, this.location, this.sort, this.name).subscribe((data: any) => {
      this.places = data;
      this.currentPage = 1;
    });
  }
}
