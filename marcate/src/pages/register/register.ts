// import { HomePage } from './../home/home';
// import { AuthService } from './../../providers/auth/auth-service';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    // public authService: AuthService
    ) {

  }

  ionViewDidLoad() {
    this.user = {
      email: '',
      password: ''
    }
    console.log('ionViewDidLoad RegisterPage');
  }

  createAccout() {
<<<<<<< HEAD
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'})
=======
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
    console.log(toast);

>>>>>>> 3e63128c154ea49dfcc30e0d26da5dcead377c82
    // this.authService.createUser(this.user)
    // .then((user: any) => {
    //   toast.setMessage('Usuário Criado com sucesso');
    //   toast.present();

    //   // this.navCtrl.setRoot()
    // })
    // .catch(error => {
    //   console.log('error =>>',error);
    // });
  }
}
