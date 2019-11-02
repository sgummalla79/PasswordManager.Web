import {Account} from "./account.model";

export class AccountsService {
    accounts : Account[] = [
        new Account("Production", "test1","test1"),
        new Account("Production", "test2","test2"),
        new Account("Production", "test3","test3"),
        new Account("Production", "test4","test4"),
    ];

    public getAccounts() : Account[] {
        console.log(this.accounts);
        return this.accounts;
    }

    public addAccount(account : Account) {
        console.log(this.accounts);
        this.accounts.push(account);
    }
}