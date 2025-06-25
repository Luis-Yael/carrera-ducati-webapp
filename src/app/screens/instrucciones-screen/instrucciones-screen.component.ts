import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones-screen',
  templateUrl: './instrucciones-screen.component.html',
  styleUrls: ['./instrucciones-screen.component.scss']
})
export class InstruccionesScreenComponent implements OnInit{

  public lista_puntuacion:any = [];
  public isLoading:boolean = false;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.lista_puntuacion = [
      { "descripcion": "Código redimido", "puntos": 1000},
      { "descripcion": "Jugar sin chocar de 0 a 30 segundos", "puntos": 100},
      { "descripcion": "Jugar sin chocar de 31 a 60 segundos", "puntos": 200},
      { "descripcion": "Jugar sin chocar de 61 a 90 segundos", "puntos": 300},
      { "descripcion": "Jugar sin chocar de 91 a 120 segundos", "puntos": 400},
    ];
  }

  public jugarAhora(){
    this.router.navigate(["nuevo-look"]);

  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}
