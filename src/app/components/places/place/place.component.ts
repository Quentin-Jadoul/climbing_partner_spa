import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { BouldersService } from 'src/app/services/boulders.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  bouldersPerPage = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage: number = 1;
  totalBoulders: number = 0;

  place: any = {};
  boulders: any = [];

  place_id: number = 0;
  grades = ['3', '3+', '4', '4+', '5', '5+', '6A', '6A+', '6B', '6B+', '6C', '6C+', '7A', '7A+', '7B', '7B+', '7C', '7C+', '8A', '8A+', '8B', '8B+', '8C', '8C+', '9A' ];
  minGrade: string = '';
  maxGrade: string = '';
  type: string = '';
  status: string = '';

  constructor(
    private PlacesService: PlacesService,
    private BouldersService: BouldersService
  ) { }

  ngOnInit(): void {
    this.place_id = Number(window.location.href.split('/').slice(-1)[0]);
    this.PlacesService.getPlace(this.place_id).subscribe((data: any) => {
      this.place = data;
    });
    this.BouldersService.getBouldersByPlaceCount(this.place_id, this.minGrade, this.maxGrade, this.type, this.status).subscribe((data: any) => {
      this.totalBoulders = data.count;
      this.showPage(1);
    });
  }

  onSubmit() {
    this.minGrade = encodeURIComponent(this.minGrade);
    this.maxGrade = encodeURIComponent(this.maxGrade);
    this.BouldersService.getBouldersByPlace(this.place_id, this.bouldersPerPage, this.currentPage - 1, this.minGrade, this.maxGrade, this.type, this.status).subscribe((data: any) => {
      this.boulders = data;
    });
    this.BouldersService.getBouldersByPlaceCount(this.place_id, this.minGrade, this.maxGrade, this.type, this.status).subscribe((data: any) => {
      this.totalBoulders = data.count;
    });
  }

  showPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.BouldersService.getBouldersByPlace(this.place_id, this.bouldersPerPage, this.currentPage - 1, this.minGrade, this.maxGrade, this.type, this.status).subscribe((data: any) => {
      this.boulders = data;
    });
  }

  onPageChange(event: any) {
    this.bouldersPerPage = event.pageSize;
    this.showPage(event.pageIndex + 1);
  }
}
