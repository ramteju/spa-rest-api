import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';



import { RestApiService } from 'src/app/services/rest-api.service';
import { DetailsPopupComponent } from '../details-popup/details-popup.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'type', 'address', 'website', 'actions'];
  dataSource: any = [];

  @ViewChild(MatPaginator) paginator: any;



  constructor(private restApI: RestApiService, private dialog: MatDialog) {
  }



  async getApiData() {
    return await this.restApI.getData("?by_city=san_diego").toPromise().then(r => r).catch(e => []);
  }

  async ngAfterViewInit() {
    const data: any = await this.getApiData();
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  openDialog(details: object) {
    const dialogRef = this.dialog.open(DetailsPopupComponent, { data: details, width:"90vw", height:"90vh" });
  }

}
