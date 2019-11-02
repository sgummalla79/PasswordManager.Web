import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { IAccount } from '../account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account : IAccount;
  
  constructor(private accountService: AccountsService) { }

  ngOnInit() {
  }

  onAddServiceAccount() {
    console.log("Saved");
  }
}
