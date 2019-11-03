import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabSelected = new EventEmitter<string>();
  @Input() loggedInUser : string = "un-authorized";

  constructor() { }

  ngOnInit() {
  }

  onSelect(tab : string){
    this.tabSelected.emit(tab);
  }
}
