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

  createAccout() {
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
    this.authService.createUser(this.user)
    .then((user: any) => {
      user.sendEmailVerification();
      toast.setMessage('Usuário criado com sucesso');
      toast.present();
      this.navCtrl.setRoot(HomePage);
    })
    .catch((error: any) => {
      // if (error.code == '') {
        toast.setMessage('Erro ao cadastrar');
      // }
      toast.present();
    });
  }
}
