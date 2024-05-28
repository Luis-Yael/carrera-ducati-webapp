import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-look',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoLook {
  public isLoading: boolean = false;
  
  constructor(
    private router: Router) {}

  irJuego() {
    this.router.navigate(['/juego']);
  }
  
}