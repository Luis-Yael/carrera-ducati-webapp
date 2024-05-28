import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-app',
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.scss']
})
export class FooterAppComponent implements OnInit{

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  public terminosCondiciones(){
    this.router.navigate(["terminos"]);
  }

  public avisoPrivacidad(){
    this.router.navigate(["Politica-de-privacidad"]);
  }
}
