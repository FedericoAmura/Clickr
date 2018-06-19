import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ServiceProvider } from "../../providers/service/service";

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html'
})
export class ServicePage {

  constructor(public navCtrl: NavController, public serviceProvider: ServiceProvider) {

  }

  public getServices() {
    return this.serviceProvider.getServices();
  }

  public loadService(serviceId) {
    this.navCtrl.push('ServiceDetailPage', {service: serviceId});
  }

}
