import { TabsPage } from './../tabs/tabs';
import { LoginPage } from './../login/login';
import { AuthService } from './../../providers/auth/auth-service';
import { Component } from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public authService :AuthService,
    public toastCtrl: ToastController,
    ) {

  }

  signOut() {
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
    this.authService.signOut()
    .then(() => {
      this.navCtrl.setRoot('LoginPage');
      toast.setMessage('Você foi deslogado.');
      toast.present();
    })
    .catch( error => {
      console.log('ERROR', error);
    });
  }
}
