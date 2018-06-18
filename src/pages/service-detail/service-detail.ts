import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service-detail',
  templateUrl: 'service-detail.html',
})
export class ServiceDetailPage {

  service = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.service = this.navParams.get('service');
  }

  public addOrder() {
    
  }
}
