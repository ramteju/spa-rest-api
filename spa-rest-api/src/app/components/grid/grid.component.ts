import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'address', 'website', 'actions'];
  dataSource:any;

  @ViewChild(MatPaginator) paginator: any;


  constructor(private restAPI:RestApiService) { }

  ngOnInit(): void {
    this.getApiData()
  }


  async getApiData(){
    this.dataSource = await this.restAPI.getData("?by_city=san_diego").toPromise().then(r =>r).catch(e =>[]);
    this.dataSource.paginator = this.paginator;

  }

}
