import { Injectable } from '@angular/core';

import { Pack } from "../order/order";

@Injectable()
export class PurchaseProvider {

  purchases: Purchase[] = [
    {
      id: 1,
      name: "Coto - Compra semanal",
      serviceId: 1,
      products: [
        {productId: 1, amount: 3},
        {productId: 2, amount: 1},
        {productId: 3, amount: 1}],
      status: "En camino",
      cancellable: true,
      when: "Hace 2 horas",
      delivery: null,
      from: "Sucursal Cabildo"
    },
    {
      id: 2,
      name: "Coto - Compra semanal",
      serviceId: 1,
      products: [
        {productId: 1, amount: 2},
        {productId: 2, amount: 1}],
      status: "Entregado",
      cancellable: false,
      when: "2018/06/11 18:35:25",
      delivery: "2018/06/13 19:22:45",
      from: "Sucursal Cabildo"
    }
  ];

  constructor() {

  }

  public getPurchases() {
    return this.purchases;
  }

  public getPurchase(id: number) {
    return this.purchases.filter(purchase => purchase.id === id)[0];
  }

  public addPurchaseComidaFrida() {
    let purchase: Purchase = {
      id: 3,
      name: "Comida para Frida",
      serviceId: 1,
      products: [{productId: 4, amount: 1}],
      status: "Pendiente de confirmacion",
      cancellable: true,
      when: "Hace unos instantes",
      delivery: null,
      from: "Sucursal Cabildo"
    };
    this.purchases.unshift(purchase);
  }

}

export class Purchase {
  id: number;
  name: string;
  serviceId: number;
  products: Pack[];
  status: string;
  cancellable: boolean;
  when: string;
  delivery: string;
  from: string;
}
