import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions-screen',
  templateUrl: './instructions-screen.component.html',
  styleUrls: ['./instructions.component.css']
})
export class Instructions {
  public isLoading: boolean = false;
  
  constructor(
    private router: Router) {}

  irJuego() {
    this.router.navigate(['/juego']);
  }
}

