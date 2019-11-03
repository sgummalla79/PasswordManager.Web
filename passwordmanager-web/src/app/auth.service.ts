import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {
    private basePath: string = "http://occinfwwatv01.corp.pvt:8092/api/auth/"

    constructor(private http: HttpClient) {
    }

    public get() {
        return this.http.get(this.basePath);
    }
}