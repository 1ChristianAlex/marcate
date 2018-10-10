import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public events: Events) {

  }

  logout () {
    this.events.publish('user:logout');
  }
}
