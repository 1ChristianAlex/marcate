import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  logout () {
    this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
    this.navCtrl.popToRoot();
  }
}
