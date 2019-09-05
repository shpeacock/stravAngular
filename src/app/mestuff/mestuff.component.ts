import { Component, OnInit } from '@angular/core';
import {StravaService } from '../strava.service';

@Component({
  selector: 'app-mestuff',
  templateUrl: './mestuff.component.html',
  styleUrls: ['./mestuff.component.css']
})
export class MestuffComponent implements OnInit {
  myData: {};

  constructor(private stravaService: StravaService) { }

  ngOnInit() {
  }

  getShit() {
    this.stravaService.getDatData().then((response) => {
      this.myData = response;
    })
    .catch(err => {console.log(err)});
  }

}
