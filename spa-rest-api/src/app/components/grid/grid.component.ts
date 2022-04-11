import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RestApiService } from 'src/app/services/rest-api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BreweriesAddressComponent } from '../breweries-address/breweries-address.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'address', 'website', 'actions'];
  dataSource:any;

  @ViewChild(MatPaginator) paginator: any;


  constructor(private restAPI:RestApiService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getApiData()
  }


  async getApiData(){
    this.dataSource = await this.restAPI.getData("?by_city=san_diego").toPromise().then(r =>r).catch(e =>[]);
    this.dataSource.paginator = this.paginator;

  }

  ShowMoreInfo(brewery:any){
    console.log(brewery);
      const dialogRef = this.dialog.open(BreweriesAddressComponent, {
        width: '850px',
        height:'600px',
        data: brewery.id,
      });
  }

}
