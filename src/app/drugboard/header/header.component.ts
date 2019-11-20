import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() clicked = new EventEmitter<any>();
  @Output() reload = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  showInfo() {
    this.clicked.emit('clicked');
  }

  reloadBoard() {
    this.reload.emit('reload clicked');
  }
}
