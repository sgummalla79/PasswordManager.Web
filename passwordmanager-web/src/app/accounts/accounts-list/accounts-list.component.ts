import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { IAccount } from "../account.model";
import { CellCustomComponent } from './cellcustom/cellCustom.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ToastrService } from 'ngx-toastr';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;

  rowData: IAccount[] = [];

  constructor(private accountsService: AccountsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.accountsService.fetchAccounts().subscribe((responseData: IAccount[]) => {
      this.rowData = responseData;
    });

    this.accountsService.accountsListChanged.subscribe(() => {
      this.accountsService.fetchAccounts().subscribe((responseData: IAccount[]) => {
        this.rowData = responseData;
      });
    })
  }

  columnDefs = [
    { headerName: 'Select', width: 100, field: 'select', checkboxSelection: true },
    { headerName: 'Id', field: 'id', hide: true},
    { headerName: 'Enivronment', field: 'environment', width: 200, resizable: true },
    { headerName: 'Service Account', field: 'serviceAccount', width: 200, resizable: true },
    { headerName: 'Password', field: 'password', width: 500, resizable: true, cellRendererFramework: CellCustomComponent }
  ];

  deleteSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedAccounts = selectedData.map(node => node.id);
    if (selectedAccounts.length !== 0){
      this.accountsService.deleteAccount(selectedAccounts[0]).subscribe((response: HttpResponseBase) =>{
        if (response.status == 200){
          this.accountsService.accountsListChanged.emit();
          this.toastr.success("Account Saved Successfully", 'Success');
        }
      }, (error : HttpResponseBase)=>{
        console.log(error);
          this.toastr.error("Delete failed, please try again", 'Error');
      })
    }
  }
}
