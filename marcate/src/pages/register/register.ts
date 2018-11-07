import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { AuthService } from './../../providers/auth/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../providers/auth/user';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: User = new User();
  public regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public authService: AuthService
    ) {

  }

  ionViewDidLoad() {
    this.user = {
      email: '',
      password: ''
    }
    console.log('ionViewDidLoad RegisterPage');
  }


  // if (this.regexpEmail.test(this.user.email)) {

  createAccout() {
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
    console.log(toast);

    this.authService.createUser(this.user)
    .then((user: any) => {
      toast.setMessage('Usuário Criado com sucesso');
      toast.present();

      this.navCtrl.setRoot(TabsPage);
    })
    .catch(error => {
      toast.setMessage(error.code);
      console.log('error =>>',error);
    });
  }
}
