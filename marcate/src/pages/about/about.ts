import { LoginPage } from './../login/login';
import { AuthService } from './../../providers/auth/auth-service';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public authService :AuthService
    ) {

  }

  signOut() {
    this.authService.signOut()
    .then(() => {
      console.log('Sim');

      this.navCtrl.setRoot(LoginPage);
    })
    .catch( error => {
      console.log('ERROR', error);
    });
  }
}
