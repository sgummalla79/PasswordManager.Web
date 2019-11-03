import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { IAccount } from "../account.model";
import { CellCustomComponent } from './cellcustom/cellCustom.component';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  rowData: IAccount[] = [];

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
    this.accountService.fetchAccounts().subscribe((responseData: IAccount[]) => {
      this.rowData = responseData;
    });

    this.accountService.accountAdded.subscribe(()=>{
      this.accountService.fetchAccounts().subscribe((responseData: IAccount[]) => {
        this.rowData = responseData;
      });
    })
  }

  columnDefs = [
    { headerName: 'Enivronment', field: 'environment', width: 200, resizable: true },
    { headerName: 'Service Account', field: 'serviceAccount', width: 200, resizable: true },
    { headerName: 'Password', field: 'password', width: 500, resizable: true, cellRendererFramework: CellCustomComponent }
  ];

  onGridReady(gridOptions) {
    //gridOptions.api.sizeColumnsToFit();
  }
}
