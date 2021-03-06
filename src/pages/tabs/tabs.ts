import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {FeedPage} from '../feed/feed'
import { Events, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FeedPage;

  constructor(public events: Events, public navCtrl: NavController) {
    events.subscribe('user:logout', () => {
      this.navCtrl.popToRoot();
    })
  }
}
