import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarbeariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barbearia',
  templateUrl: 'barbearia.html',
})
export class BarbeariaPage {

  barbearia = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.barbearia = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarbeariaPage');
  }

  back () {
    this.navCtrl.pop();
  }

}
