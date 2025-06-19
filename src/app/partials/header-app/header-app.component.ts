import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit{
  @Output() drawer = new EventEmitter();

  constructor(){}

  ngOnInit(): void {

  }

  drawerOpen(){
    this.drawer.emit();
  }
}
