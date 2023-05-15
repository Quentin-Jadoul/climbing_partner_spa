import { Component } from '@angular/core';
import { ClimbsService } from 'src/app/services/climbs.service';
import { OnInit } from '@angular/core';
import { BouldersService } from 'src/app/services/boulders.service';

@Component({
  selector: 'app-climb-create',
  templateUrl: './climb-create.component.html',
  styleUrls: ['./climb-create.component.css']
})
export class ClimbCreateComponent implements OnInit {

  constructor(
    private ClimbsService: ClimbsService,
    private BouldersService: BouldersService
  ) { }

  climb = {
    boulder_id: 1,
    nb_attempts: 0,
    nb_success: 0,
    style: '',
    activity_id: 1
  };

  activity_id: number = 1;
  boulders: any = [];

  boulder_name: string = '';

  place_id: number = 1;

  ngOnInit(): void {
    this.BouldersService.getBouldersByPlaceV2(this.place_id).subscribe((data: any) => {
      this.boulders = data;
    });
  }

  onSubmit() {
    this.ClimbsService.createClimb(this.climb).subscribe((data: any) => {
      this.ngOnInit();
    });
  }

}
