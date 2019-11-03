import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAccount } from './account.model';


@Injectable()
export class AccountsService {
    private basePath: string = "http://occinfwwatv01.corp.pvt:8092/api/PasswordStore/"

    @Output() accountAdded = new EventEmitter();

    constructor(private http: HttpClient) {
    }

    public fetchAccounts() {
        return this.http.get(this.basePath);
    }

    public getPassword(id: number) {
        return this.http.get(this.basePath + id + "/password");
    }

    public addAccount(account: IAccount) {
        return this.http.post(this.basePath, account, {observe : 'response'});
    }
}