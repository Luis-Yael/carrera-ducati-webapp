import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-look-screen',
  templateUrl: './nuevo-look-screen.component.html',
  styleUrls: ['./nuevo-look-screen.component.scss']
})
export class NuevoLookScreenComponent implements OnInit{

  public isLoading:boolean = false;

  constructor(){}

  ngOnInit(): void {

  }

  public omitir(){

  }

  public usarLentes(){

  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

}
