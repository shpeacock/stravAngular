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
      `https://www.strava.com/api/v3/athletes/6147470/stats?access_token=a56ef6db4f9772d39ca0496ea2f8818b2763e2c5`
      ).pipe(map(response => response)).toPromise(); 
  }
  
}
