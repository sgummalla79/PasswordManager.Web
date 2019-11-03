import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { IAccount } from '../account.model';
import { NgForm } from '@angular/forms';
import { HttpResponseBase } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('f', { static: false }) addAccountForm: NgForm;
  @Input() darkMode : boolean = true;

  account: IAccount = { "environment": "", "serviceAccount": "", "password": "", links: [] };

  constructor(private accountsService: AccountsService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSave() {
    if (this.addAccountForm.valid) {
      this.account.environment = this.addAccountForm.value.environment;
      this.account.serviceAccount = this.addAccountForm.value.serviceAccount;
      this.account.password = this.addAccountForm.value.password;
      this.accountsService.addAccount(this.account)
        .subscribe((response: HttpResponseBase) => {
          if (response.status == 201) {
            this.toastr.success("Account Saved Successfully", 'Success');
            this.accountsService.accountsListChanged.emit();
            this.addAccountForm.reset();
          }
        }, (error: HttpResponseBase) => {
          console.log(error);
          this.toastr.error("Saving failed, please try again", 'Error');
        });
    }
  }

  onCancel() {
    this.addAccountForm.reset();
  }
}
