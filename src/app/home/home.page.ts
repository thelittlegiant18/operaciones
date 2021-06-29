import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero1:any;
  numero2:any;
  Suma:number;

  constructor() {}

  sumaNumero(){
    var N1=parseInt(this.numero1);
    var N2=parseInt(this.numero2);
    this.Suma=N1+N2;
    this.numero1="";
    this.numero2="";
  }

}
