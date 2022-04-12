import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl:string = environment.API_URL;

  constructor(private http: HttpClient) { }

  /** 
   * 
   */
  getData(endPoint:string){
    return this.http.get(`${this.apiUrl}${endPoint}`);
  }

  getMap(){
    return this.http.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.MAP_API_KEY}`, 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
