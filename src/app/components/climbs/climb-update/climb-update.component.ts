import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClimbsService } from 'src/app/services/climbs.service';
import { BouldersService } from 'src/app/services/boulders.service';

@Component({
  selector: 'app-climb-update',
  templateUrl: './climb-update.component.html',
  styleUrls: ['./climb-update.component.css']
})
export class ClimbUpdateComponent {
  @Input() place_id: number = 0;
  @Input() climb_id: number = 0;
  @Output() climbCreated = new EventEmitter<any>();

  constructor(
    private ClimbsService: ClimbsService,
    private BouldersService: BouldersService
  ) { }

  climb: any = {};

  boulders: any = [];

  boulder_name: string = '';

  // Function that is executed on change of the climb_id input
  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log(this.climb_id)
    this.ClimbsService.getClimb(this.climb_id).subscribe((data: any) => {
      this.climb = data;
      console.log(this.climb);
    });
    this.BouldersService.getBouldersByPlaceV2(this.place_id).subscribe((data: any) => {
      this.boulders = data;
    });
  }

  onSubmit() {
    this.ClimbsService.updateClimb(this.climb_id, this.climb).subscribe((data: any) => {
      this.climbCreated.emit();
    });
  }
}
