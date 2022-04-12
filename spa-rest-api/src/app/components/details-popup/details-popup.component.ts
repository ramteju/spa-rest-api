import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.scss']
})
export class DetailsPopupComponent implements OnInit {

  details:any;
  mapLoaded:any
  options:any;

  constructor(private restApi:RestApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getDetails()
  }


  async getDetails(){
    console.log(this.data);
    this.options = {
      center: {lat: +this.data.latitude, lng: +this.data.longitude},
      zoom: 4
    };
   this.mapLoaded = await this.restApi.getMap().subscribe(r =>r);
  }

}
