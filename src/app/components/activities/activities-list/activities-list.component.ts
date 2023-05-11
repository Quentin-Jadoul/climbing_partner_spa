import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  activitiesPerPage = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage: number = 1;
  totalActivities: number = 0;

  activities: any = [];

  constructor(
    private ActivitiesService: ActivitiesService,
  ) {}

  ngOnInit(): void {
    this.ActivitiesService.getActivitiesCount().subscribe((data: any) => {
      this.totalActivities = data.count;
      this.showPage(1);
    });
  }

  onSubmit() {
    this.ActivitiesService.getActivities(this.activitiesPerPage, this.currentPage - 1).subscribe((data: any) => {
      this.activities = data;
    });
    this.ActivitiesService.getActivitiesCount().subscribe((data: any) => {
      this.totalActivities = data.count;
    });
  }

  showPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.ActivitiesService.getActivities(this.activitiesPerPage, this.currentPage - 1).subscribe((data: any) => {
      this.activities = data;
    });
  }

  onPageChange(event: any) {
    this.activitiesPerPage = event.pageSize;
    this.showPage(event.pageIndex + 1);
    // Go back to the top of the page
    window.scrollTo(0, 0);
  }



}
