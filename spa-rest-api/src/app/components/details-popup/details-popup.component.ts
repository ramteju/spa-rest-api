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
  Name:string='';
  BreweryType:string='';
  Address_2:string='';
  StreetAddress:string='';
  city:string='';
  State:string='';
  Country:string='';
  Postal_Code:string='';
  PhoneNumber:string='';
  Web_SiteUrl:string='';

  constructor(private restApi:RestApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getDetails()
  }


  async getDetails(){
    console.log(this.data);
    this.Name = this.data.name;
    this.BreweryType = this.data.brewery_type;
    this.Address_2 = this.data.address_2;
    this.StreetAddress = this.data.address_3;
    this.city = this.data.city;
    this.State = this.data.state;
    this.Country = this.data.country;
    this.Postal_Code = this.data.postal_code;
    this.PhoneNumber = this.data.phone_number;
    this.Web_SiteUrl = this.data.website_url;
    this.options = {
      center: {lat: +this.data.latitude, lng: +this.data.longitude},
      zoom: 4
    };
   this.mapLoaded = await this.restApi.getMap().subscribe(r =>r);
  }

}
