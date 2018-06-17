import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-button-detail',
  templateUrl: 'button-detail.html',
})
export class ButtonDetailPage {

  button = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.button = this.navParams.get('button');
  }

}
