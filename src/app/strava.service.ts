import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// var strava = require('strava-v3');
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  constructor(private fuckenThing: HttpClient) { }

  getDatData(){
    return this.fuckenThing.get(
      `https://www.strava.com/api/v3/athletes/6147470/stats?access_token=dc5f908475640224a0df8f1ae820d261d3a038eb`
      ).pipe(map(response => response)).toPromise(); 
  }
  
  getClubBoard(){
    return this.fuckenThing.get(
      `https://www.strava.com/api/v3/clubs/51419/members?access_token=dc5f908475640224a0df8f1ae820d261d3a038eb`
    ).pipe(map(response => response)).toPromise();
  }
}
