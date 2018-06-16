import { Component } from '@angular/core';

import { ServicePage } from '../service/service';
import { PurchasePage } from '../purchase/purchase';
import { ButtonPage } from '../button/button';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ButtonPage;
  tab2Root = ServicePage;
  tab3Root = PurchasePage;

  constructor() {

  }
}
