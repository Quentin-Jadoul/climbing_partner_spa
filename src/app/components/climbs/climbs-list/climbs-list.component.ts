import { Component } from '@angular/core';
import { ClimbsService } from 'src/app/services/climbs.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-climbs-list',
  templateUrl: './climbs-list.component.html',
  styleUrls: ['./climbs-list.component.css']
})
export class ClimbsListComponent implements OnInit {

  constructor(
    private ClimbsService: ClimbsService,
  ) { }

  climbs: any = [];
  activity_id: number = 1;

  ngOnInit(): void {
    this.ClimbsService.getClimbsByActivityId(1).subscribe((data: any) => {
      this.climbs = data;
    });
  }
}
