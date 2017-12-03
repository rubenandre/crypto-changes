import { Component } from '@angular/core';

import { SobrePage } from '../sobre/sobre';
import { OutrasPage } from '../outras/outras';
import { TopPage } from '../top/top';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TopPage;
  tab2Root = OutrasPage;
  tab3Root = SobrePage;

  constructor() {

  }
}
