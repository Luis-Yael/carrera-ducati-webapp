import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class Juego {

  constructor(
    private router: Router) {}

  goInicio() {
    this.router.navigate(['home']);
  }

  isLoading: any;
  
}