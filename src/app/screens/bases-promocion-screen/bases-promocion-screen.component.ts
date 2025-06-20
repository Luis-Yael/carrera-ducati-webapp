import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases-promocion-screen',
  templateUrl: './bases-promocion-screen.component.html',
  styleUrls: ['./bases-promocion-screen.component.scss']
})
export class BasesPromocionScreenComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {

  }

  public goInstrucciones(){

  }

   public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

}
