import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = {
      email: '',
      password: ''
    }
  }

  login () {
    // this.navCtrl.push(TabsPage);
    this.navCtrl.setRoot(TabsPage);
  }

  register () {
    this.navCtrl.push('RegisterPage');
  }

}
