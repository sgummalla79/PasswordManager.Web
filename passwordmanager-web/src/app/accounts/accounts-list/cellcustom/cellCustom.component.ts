import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { AccountsService } from '../../accounts.service';

@Component({
  selector: 'app-cellcustom',
  templateUrl: './cellCustom.component.html',
  styleUrls: ['./cellCustom.component.css']
})
export class CellCustomComponent implements AgRendererComponent {
  cellOriginalData: any;
  cellData: any;
  params: any;
  showPassword: boolean = false;

  constructor(private accountsService: AccountsService) { }

  agInit(params) {
    this.params = params;
    this.cellData = this.cellOriginalData = params.value.length > 50 ? params.value.substring(1, 50).concat(".....") : params.value;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  ngOnInit() { }

  togglePassword() {
    this.showPassword = !this.showPassword;

    if (this.showPassword) {
      let rowData = this.params;
      console.log(rowData);
      this.accountsService.getPassword(rowData.data.id)
        .subscribe((responseData: { password: string }) => {
          this.cellData = responseData.password;
        });
    }
    else {
      this.cellData = this.cellOriginalData;
    }
  }
}
