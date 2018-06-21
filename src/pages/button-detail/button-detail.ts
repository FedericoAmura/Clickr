import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-button-detail',
  templateUrl: 'button-detail.html',
})
export class ButtonDetailPage {

  button = {
    id: null,
    name: null,
    dsn: null,
    trigger: null
  };

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.button = this.navParams.get('button');
  }

  public confirmUnlink() {
    let alert = this.alertCtrl.create({
      title: "Confirmar desvinculacion",
      message: `Seguro que quiere desvincular el boton "${this.button.name}"?`,
      buttons: [
        {
          text: "Desvincular",
          handler: () => {
            this.unlinkButton();
          }
        },
        {
          text: "Volver"
        }
      ]
    });
    alert.present();
  }

  public confirmDeletion() {
    let alert = this.alertCtrl.create({
      title: "Confirmar eliminacion",
      message: `Seguro que quiere eliminar el boton "${this.button.name}"?`,
      buttons: [
        {
          text: "Eliminar"
        },
        {
          text: "Volver"
        }
      ]
    });
    alert.present();
  }

  public unlinkButton() {
    this.button.trigger = null;
  }
}
