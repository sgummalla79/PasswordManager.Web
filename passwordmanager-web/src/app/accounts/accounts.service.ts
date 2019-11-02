import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


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
}