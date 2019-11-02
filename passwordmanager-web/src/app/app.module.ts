//built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr'; 
import { NotificationComponent } from './notification/notification.component';

//custom modules
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { AccountComponent } from './accounts/account/account.component';
import { AccountsService } from './accounts/accounts.service';
import { AccountsComponent } from './accounts/accounts.component';
import { HeaderComponent } from './header/header.component';
import { CellCustomComponent } from './accounts/accounts-list/cellcustom/cellCustom.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    AccountComponent,
    AccountsComponent,
    HeaderComponent,
    CellCustomComponent,
    NotificationComponent
  ],
  imports: [
    //built-in modules
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents(null),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
    //custom modules
    //AppRoutingModule
  ],
  providers: [AccountsService],
  entryComponents: [CellCustomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
