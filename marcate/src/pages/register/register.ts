import { TabsPage } from './../tabs/tabs';
import { AuthService } from './../../providers/auth/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../providers/auth/user';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

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
    public authService: AuthService,
    public dbService: FirebaseServiceProvider,
    ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  // if (this.regexpEmail.test(this.user.email)) {

    saveUser(){
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });

      try {
        console.log('Sim');

       
        this.user = {
          nome : this.user.nome,
          telefone: this.user.telefone,
          password: this.user.password,
          email: this.user.email

        }
        console.log('user', this.user);
        this.dbService.saveUser(this.user);
        // this.goBack();
        // this.saveImg();
        toast.setMessage('Usuário criado com sucesso');
        toast.present();
        this.sucessToaster();
      } catch (error) {
        console.log(error)
      }

    }

    sucessToaster() {
      let toast = this.toastCtrl.create(
        {
          message:'Usuário criado com sucesso',
          duration:3000,
          position:'bottom'
        });
        toast.onDidDismiss(() =>{
          console.log('Dismissed toast');
        })
    }

  createAccout() {

    this.authService.createUser(this.user)
    .then((user: any) => {
      this.saveUser();
      this.navCtrl.setRoot(TabsPage);
    })
    .catch(error => {
      console.log('error =>>',error);
    });
  }
}
