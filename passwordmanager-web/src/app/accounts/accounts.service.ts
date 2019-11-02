import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAccount } from './account.model';


@Injectable()
export class AccountsService {
    private basePath: string = "http://localhost:5000/api/PasswordStore/"

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