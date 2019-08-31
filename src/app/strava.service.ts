import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// var strava = require('strava-v3');
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  constructor(private fuckenThing: HttpClient) { }

  getDatData(){
    return this.fuckenThing.get(
      `https://www.strava.com/api/v3/athletes/6147470/stats?access_token=30a50a9cef4a0a9e3277e110cebcab25eb7e1a03`
      ).pipe(map(data => {console.log(data)})); 
   }
}
