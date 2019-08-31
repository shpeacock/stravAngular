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

  getShit(){
    console.log('yeah you pressed dat button');
    this.stravaService.getDatData()
    // .then((response) => {console.log(response)})
  }

}
