import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// var strava = require('strava-v3');
import { map } from 'rxjs/operators';
// import { keys } from './keys';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  constructor(private fuckenThing: HttpClient) { }

  getDatData(){
    return this.fuckenThing.get(
      `https://www.strava.com/api/v3/athletes/6147470/stats?access_token=b79333edcb57c00cbe9b97b935c5813ffd0bba9c`
      ).pipe(map(response => response)).toPromise(); 
  }
  
  getClubBoard(){
    return this.fuckenThing.get(
      `https://www.strava.com/api/v3/clubs/51419/members?access_token=b79333edcb57c00cbe9b97b935c5813ffd0bba9c`
    ).pipe(map(response => response)).toPromise();
  }
}
