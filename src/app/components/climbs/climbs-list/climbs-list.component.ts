import { Component, Input, OnInit } from '@angular/core';
import { ClimbsService } from 'src/app/services/climbs.service';

@Component({
  selector: 'app-climbs-list',
  templateUrl: './climbs-list.component.html',
  styleUrls: ['./climbs-list.component.css']
})
export class ClimbsListComponent implements OnInit {
  @Input() activity_id: number = 0;

  constructor(
    private ClimbsService: ClimbsService,
  ) { }

  climbs: any = [];

  ngOnInit(): void {
    this.ClimbsService.getClimbsByActivityId(this.activity_id).subscribe((data: any) => {
      this.climbs = data;
    });
  }

  climbCreated() {
    this.ClimbsService.getClimbsByActivityId(this.activity_id).subscribe((data: any) => {
      this.climbs = data;
    });
  }
}
