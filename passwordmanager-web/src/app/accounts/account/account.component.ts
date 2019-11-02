import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Account } from '../account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account : Account = new Account("", "","");
  
  constructor(private accountService: AccountsService) { }

  ngOnInit() {
  }

  onAddServiceAccount() {
    this.accountService.addAccount(this.account);
  }
}
