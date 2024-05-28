import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bases-promocion-screen',
  templateUrl: './bases-promocion-screen.component.html',
  styleUrls: ['./bases-promocion-screen.component.scss']
})
export class BasesPromocionScreenComponent implements OnInit{


  constructor(
    private router: Router) {}

  irAInstrucciones() {
    this.router.navigate(['/instrucciones']);
  }



  ngOnInit(): void {

  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

}
