import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {

  services: Service[] = [
    {id: 1, icon: "coto.png", name: "Coto", stars: 4.4, telephone: "0800-222-1234"},
    {id: 2, icon: "jumbo.png", name: "Jumbo", stars: 4.2, telephone: "0800-436-6452"},
    {id: 3, icon: "nobleRepulgue.png", name: "Noble repulgue", stars: 3.7, telephone: "0800-756-2524"}
  ];

  constructor(private storage: Storage) {

  }

  public getServices() {
    return this.services;
  }

  public getService(id: number) {
    return this.services.filter(service => service.id === id)[0];
  }

}

export class Service {
  id: number;
  icon: string;
  name: string;
  stars: number;
  telephone: string;
}
