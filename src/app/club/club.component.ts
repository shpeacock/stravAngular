import { Component, OnInit } from '@angular/core';
import { StravaService } from '../strava.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
leaders: {};
  constructor(private stravaService: StravaService) { }

  ngOnInit() {
  }

  getLeaders(){
    this.stravaService.getClubBoard()
    .then(response => {
      console.log(response);
      this.leaders = response;
    })
  }

}
