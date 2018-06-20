import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-button',
  templateUrl: 'button.html'
})
export class ButtonPage {

  buttons = [
    {id: 1, name: "Clickr alacena", dsn: "G030 MD04 9341 4C4M", trigger: "Coto - Compra semanal"},
    {id: 2, name: "Clickr lavadero", dsn: "G030 MD67 5844 73JR", trigger: null},
    {id: 3, name: "Clickr Frida", dsn: "G030 MD82 7653 F54H", trigger: "Comida para Frida"}
  ];

  constructor(public navCtrl: NavController) {

  }

  public loadButton(button) {
    this.navCtrl.push('ButtonDetailPage', {button: button});
  }

  public addButton() {
    /*this.navCtrl.push('ButtonDetailPage',
      {button: {name: "Nuevo boton", dsn: "xxxx xxxx xxxx xxxx", trigger: null}});*/
  }

}
