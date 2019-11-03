import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { IAuth } from './auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  darkMode: boolean = true;
  title = 'Password Vault';
  loggedInUser: string = 'un-authorized';

  constructor(private authService : AuthService){
  }

  ngOnInit(){
    this.authService.get().subscribe((response : IAuth) => {
      if (response.isAuthenticated == true){
        this.loggedInUser = response.user;
      }
    })
  }

  onViewModeChanged(darkMode : boolean){
    this.darkMode = darkMode;
  }
}
