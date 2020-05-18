import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { DetailPage } from '../detail/detail';
import { GettingStartPage } from '../getting-start/getting-start';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MenuPage;
  tab3Root = DetailPage;

  constructor() {

  }
}
