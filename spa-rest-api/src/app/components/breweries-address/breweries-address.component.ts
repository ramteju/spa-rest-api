import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-breweries-address',
  templateUrl: './breweries-address.component.html',
  styleUrls: ['./breweries-address.component.scss']
})
export class BreweriesAddressComponent implements OnInit {
  Latitude: any;
  Longitude: any;

  constructor(public dialogRef: MatDialogRef<BreweriesAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private restAPI:RestApiService
  ) {}


  Name:string='';
  BreweryType:string='';
  Street:string='';
  Address_2:string='';
  Address_3:string='';
  City:string='';
  State:string='';
  CountyProviance:string='';
  PostalCode:string='';
  Country:string='';
  Phone:string='';
  Website:string='';
  dataSource:any;
  ngOnInit(): void {
    this.getApiData();
  }
  async getApiData(){
    this.dataSource = await this.restAPI.getData("/"+this.data).toPromise().then(r =>
      r).catch(e =>[]);
    this.Name = this.dataSource.name;
    this.BreweryType = this.dataSource.brewery_type;
    this.Street = this.dataSource.street;
    this.CountyProviance = this.dataSource.county_province;
    this.Address_2 = this.dataSource.address_2;
    this.Address_3 = this.dataSource.address_2;
    this.City = this.dataSource.city;
    this.Country = this.dataSource.country;
    this.Phone = this.dataSource.phone;
    this.PostalCode = this.dataSource.postal_code;
    this.State = this.dataSource.state;
    this.Website = this.dataSource.website_url;
    this.Latitude = this.dataSource.latitude;
    this.Longitude = this.dataSource.longitude;
  }

}


