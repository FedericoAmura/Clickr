import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'ButtonPage';
  tab2Root = 'ServicePage';
  tab3Root = 'PurchasePage';

  constructor() {

  }
}
