import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.scss']
})
export class DetailsPopupComponent implements OnInit {

  details:any;

  constructor(private restApi:RestApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getDetails()
  }


  getDetails(){
    console.log(this.data);
  }

}
