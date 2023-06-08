import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @Input() show: boolean = false;
  @ViewChild('updateClimbModal') updateClimbModal!: ElementRef;

  constructor(
    private ClimbsService: ClimbsService,
    private BouldersService: BouldersService
  ) { }

  climbs: any = [];

  selectedClimbId: number = 0;

  ngOnInit(): void {
    this.ClimbsService.getClimbsByActivityId(this.activity_id).subscribe((data: any) => {
      // for each climb, get the boulder name
      this.climbs = data;
      if (this.climbs.length > 0) {
        for (let climb of this.climbs) {
          this.BouldersService.getBoulder(climb.boulder_id).subscribe((data: any) => {
            climb.boulder_name = data.name;
            climb.boulder_grade = data.grade;
          });
        }
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

  deleteClimb(id: number) {
    this.ClimbsService.deleteClimb(id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }

  openUpdateModal(climbId: number) {
    this.selectedClimbId = climbId;
    console.log(this.selectedClimbId);
    const modalElement = document.getElementById('updateClimbModal');
    if (modalElement) {
      (window as any).$(`#${modalElement.id}`).modal('show');
    }
  }
}
