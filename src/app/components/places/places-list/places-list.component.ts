import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  name: string = '';
  location: string = '';
  type: string = '';

  places: any = [];

  constructor(
    private PlacesService: PlacesService
  ) { }

  currentPage = 1;
  totalPages = 0;
  placesPerPage = 10;
  pageNumbers: number[] = [];

  url = 'http://pat.infolab.ecam.be:60842';

  ngOnInit(): void {
    this.PlacesService.getPlacesCount().subscribe((data: any) => {
      this.totalPages = Math.ceil(data.count / this.placesPerPage);
      // we fill the array with the numbers from 1 to totalPages
      this.pageNumbers = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      this.showPage(this.currentPage);
    });
  }

  onSubmit() {
    this.PlacesService.getPlaces(this.placesPerPage, this.currentPage - 1, this.type, this.location, '', this.name).subscribe((data: any) => {
      this.places = data;
    });
  }

  showPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.PlacesService.getPlaces(this.placesPerPage, this.currentPage - 1, this.type, this.location, '', this.name).subscribe((data: any) => {
      this.places = data;
    });
  }

  goToPage(pageNumber: number) {
    console.log(pageNumber)
    this.currentPage = pageNumber;
    this.showPage(this.currentPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage() {
    console.log('nextPage')
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
}
