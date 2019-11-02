import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';


const routes = [
  {
      path: 'accounts',
      component: AccountsComponent
  },
  {
      path: 'accounts/add',
      component: AccountComponent
  },
  {
      path: '',
      redirectTo: '/accounts',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/accounts',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    CommonModule
  ]
})
export class AppRoutingModule { }
