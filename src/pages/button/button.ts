import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
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

  public loadButton(button) {
    this.navCtrl.push('ButtonDetailPage', {button: button});
  }

  public addButton() {
    this.navCtrl.push('ButtonDetailPage',
      {button: {name: "Nuevo boton", dsn: "xxxx xxxx xxxx xxxx", trigger: null}});
  }

}
