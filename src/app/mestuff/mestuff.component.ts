import { Component, OnInit } from '@angular/core';
import {StravaService } from '../strava.service';

@Component({
  selector: 'app-mestuff',
  templateUrl: './mestuff.component.html',
  styleUrls: ['./mestuff.component.css']
})
export class MestuffComponent implements OnInit {
  myData: {
  };
  swimTotal: 0;
  swimDistance: 0;
  runTotal: 0;
  bikeTotal: 0;
  constructor(private stravaService: StravaService) { }

  ngOnInit() {
 
  }

  getShit() {
    this.stravaService.getDatData().then((response: any) => {
      this.myData = response; 
      this.swimTotal = response.ytd_swim_totals.distance;
      this.runTotal = response.ytd_run_totals.distance;
      // this.bikeTotal = response.ytd_bike_totals.distance;
    })
  }

}
