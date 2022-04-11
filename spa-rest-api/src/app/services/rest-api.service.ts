import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl:string = 'https://api.openbrewerydb.org/breweries/';

  constructor(private http: HttpClient) { }

  /** 
   * 
   */
  getData(endPoint:string){
    return this.http.get(`${this.apiUrl}${endPoint}`);
  }
}
