import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css']
})
export class UserActivitiesComponent implements OnInit {

  activitiesPerPage = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage: number = 1;
  totalActivities: number = 0;

  activities: any = [];

  token: any = null;

  constructor(
    private ActivitiesService: ActivitiesService,
  ) { }

  // If the user is not logged, we open the login modal when he tries to access the activities page
  openLoginModal() {
    document.getElementById('openLoginModal')?.click();
  }

  ngOnInit(): void {
    if (localStorage.getItem('user_id') == null) {
      this.openLoginModal();
    }
    this.token = localStorage.getItem('token');
    this.ActivitiesService.getActivitiesByUserCount().subscribe((data: any) => {
      this.totalActivities = data.count;
      this.showPage(1);
    });
  }

  showPage(pageNumber: number) {
    this.currentPage = pageNumber;
    if (localStorage.getItem('user_id') != null) {
      this.ActivitiesService.getActivitiesByUser(this.activitiesPerPage, this.currentPage - 1).subscribe((data: any) => {
        this.activities = data;
      });
    } else {
      this.activities = [];
    }
  }

  onPageChange(event: any) {
    this.activitiesPerPage = event.pageSize;
    this.showPage(event.pageIndex + 1);
  }

  deleteActivity(activity_id: number) {
    this.ActivitiesService.deleteActivity(activity_id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }

}
