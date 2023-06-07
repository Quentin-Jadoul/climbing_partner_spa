import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClimbsService } from 'src/app/services/climbs.service';
import { BouldersService } from 'src/app/services/boulders.service';

@Component({
  selector: 'app-climb-create',
  templateUrl: './climb-create.component.html',
  styleUrls: ['./climb-create.component.css']
})
export class ClimbCreateComponent implements OnInit {
  @Input() activity_id: number = 0;
  @Input() place_id: number = 0;
  @Output() climbCreated = new EventEmitter<any>();

  constructor(
    private ClimbsService: ClimbsService,
    private BouldersService: BouldersService
  ) { }

  climb = {
    activity_id: this.activity_id,
    boulder_id: 1,
    nb_attempts: 0,
    nb_success: 0,
    style: ''
  };

  boulders: any = [];

  boulder_name: string = '';

  ngOnInit(): void {
    this.BouldersService.getBouldersByPlaceV2(this.place_id).subscribe((data: any) => {
      this.boulders = data;
    });
  }

  onSubmit() {
    this.climb.activity_id = this.activity_id;
    this.ClimbsService.createClimb(this.climb).subscribe((data: any) => {
      this.climbCreated.emit();
    });
  }

}
