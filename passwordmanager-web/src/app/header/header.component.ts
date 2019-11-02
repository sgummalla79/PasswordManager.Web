import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(tab : string){
    this.tabSelected.emit(tab);
  }
}
