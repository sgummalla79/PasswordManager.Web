import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { IAccount } from './account.model';


@Injectable()
export class AccountsService {
    private basePath: string = "http://3DGJN12:8081/api/PasswordStore/"

    @Output() accountsListChanged = new EventEmitter();

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

    public deleteAccount(id : any) {
        return this.http.delete(this.basePath + id, {observe: "response"});
    }
}