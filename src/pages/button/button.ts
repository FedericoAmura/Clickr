import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-button',
  templateUrl: 'button.html'
})
export class ButtonPage {

  buttons = [
    {id: 1, name: "Boton 1", dsn: "G030 MD04 9341 4C4M", trigger: 1},
    {id: 2, name: "Boton 2", dsn: "G030 MD67 5844 73JR", trigger: null}
  ];

  constructor(public navCtrl: NavController) {

  }

  public addButton() {
    console.log("apretamos el boton");
  }

}
