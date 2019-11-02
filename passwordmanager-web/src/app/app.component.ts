import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Manager';
  loadedTab: string = 'accounts';

  onNavigate(tab: string) {
    if (tab === "accounts")
      this.loadedTab = "accounts";
    else if (tab === "add")
      this.loadedTab = "add";
  }
}
