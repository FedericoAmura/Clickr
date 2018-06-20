import { Injectable } from '@angular/core';

@Injectable()
export class PurchaseProvider {

  purchases: Purchase[] = [
    {id: 1, name: "Coto - Compra semanal", serviceId: 1, status: "Entregado", cancellable: false, when: "2018/06/11 18:35:25", delivery: "2018/06/13 19:22:45", from: "Sucursal Cabildo"},
    {id: 2, name: "Coto - Compra semanal", serviceId: 1, status: "En camino", cancellable: true, when: "Hace 2 horas", delivery: null, from: "Sucursal Cabildo"}
  ];

  constructor() {

  }

  public getPurchases() {
    return this.purchases;
  }

  public getPurchase(id: number) {
    return this.purchases.filter(purchase => purchase.id === id)[0];
  }

}

export class Purchase {
  id: number;
  name: string;
  serviceId: number;
  status: string;
  cancellable: boolean;
  when: string;
  delivery: string;
  from: string;
}
