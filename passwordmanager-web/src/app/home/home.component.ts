import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columnDefs = [
    { headerName: 'Enivronment', field: 'environment' },
    { headerName: 'Service Account', field: 'serviceAccount' },
    { headerName: 'Password', field: 'password' }
  ];

  rowData = [
    {"environment" : "Production", "serviceAccount": "test1", "password" : "test1"},
    {"environment" : "Production", "serviceAccount": "test2", "password" : "test2"},
    {"environment" : "Production", "serviceAccount": "test3", "password" : "test3"},
    {"environment" : "Production", "serviceAccount": "test4", "password" : "test4"}
  ];
}
