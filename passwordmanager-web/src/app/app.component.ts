import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { IAuth } from './auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Password Vault';
  loadedTab: string = 'nothing';
  loggedInUser: string = 'un-authorized';

  constructor(private authService : AuthService){
  }

  ngOnInit(){
    this.authService.get().subscribe((response : IAuth) => {
      if (response.isAuthenticated == true){
        this.loadedTab = "accounts";
        this.loggedInUser = response.user;
      }
    })
  }

  onNavigate(tab: string) {
    if (tab === "accounts")
      this.loadedTab = "accounts";
    else if (tab === "add")
      this.loadedTab = "add";
  }
}
