import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Account } from "../account.model";

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  rowData: Account[] = [];

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
    this.rowData = this.accountService.getAccounts();
  }

  columnDefs = [
    { headerName: 'Enivronment', field: 'environment' },
    { headerName: 'Service Account', field: 'serviceAccount' },
    { headerName: 'Password', field: 'password' }
  ];
}
