//built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

//custom modules
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { AccountComponent } from './accounts/account/account.component';
import { AccountsService } from './accounts/accounts.service';
import { AccountsComponent } from './accounts/accounts.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    AccountComponent,
    AccountsComponent,
    HeaderComponent,
  ],
  imports: [ 
    //built-in modules
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents(null),
    //custom modules
    //AppRoutingModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
