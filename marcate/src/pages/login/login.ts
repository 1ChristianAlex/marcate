import { AuthService } from './../../providers/auth/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { User } from '../../providers/auth/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public toastCtrl: ToastController,
    ) { }

  signIn () {
 try {
  let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
  
  this.authService.signIn(this.user)
  .then(() => {
    this.navCtrl.setRoot(TabsPage);
    
  })
  .catch(error => {
    toast.setMessage('ERRO =>');
    toast.present();
    console.log('ERROR => ', error);

  });
 } catch (error) {
  let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
   console.log(error)
   toast.setMessage('Erro ao fazer login');
    toast.present();
 }

  }

  register () {
    this.navCtrl.push('RegisterPage');
  }

}
