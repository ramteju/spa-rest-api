import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
