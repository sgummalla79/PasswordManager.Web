import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() viewModeChanged = new EventEmitter<boolean>();
  @Input() loggedInUser : string = "un-authorized";

  darkMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onCheckChanged(){
    this.darkMode = !this.darkMode;
    this.viewModeChanged.emit(this.darkMode);
  }
}
