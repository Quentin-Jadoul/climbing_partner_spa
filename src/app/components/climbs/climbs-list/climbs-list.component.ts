import { Component, Input, OnInit } from '@angular/core';
import { ClimbsService } from 'src/app/services/climbs.service';
import { BouldersService } from 'src/app/services/boulders.service';

@Component({
  selector: 'app-climbs-list',
  templateUrl: './climbs-list.component.html',
  styleUrls: ['./climbs-list.component.css']
})
export class ClimbsListComponent implements OnInit {
  @Input() activity_id: number = 0;
  @Input() place_id: number = 0;

  constructor(
    private ClimbsService: ClimbsService,
    private BouldersService: BouldersService
  ) { }

  climbs: any = [];

  ngOnInit(): void {
    console.log(this.activity_id);
    console.log(this.place_id);
    this.ClimbsService.getClimbsByActivityId(this.activity_id).subscribe((data: any) => {
      // for each climb, get the boulder name
      this.climbs = data;
      for (let climb of this.climbs) {
        this.BouldersService.getBoulder(climb.boulder_id).subscribe((data: any) => {
          climb.boulder_name = data.name;
          climb.boulder_grade = data.grade;
        });
      }
    });
  }

  climbCreated() {
    this.ClimbsService.getClimbsByActivityId(this.activity_id).subscribe((data: any) => {
      this.climbs = data;
      for (let climb of this.climbs) {
        this.BouldersService.getBoulder(climb.boulder_id).subscribe((data: any) => {
          climb.boulder_name = data.name;
          climb.boulder_grade = data.grade;
        });
      }
    });
  }
}
