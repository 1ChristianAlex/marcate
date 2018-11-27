import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';

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
  index;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.barbearia = navParams.get('data');
    this.index = Math.floor((Math.random() * 7) + 1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarbeariaPage');
  }

  back () {
    this.navCtrl.pop();
  }

  goToProduct (index, type) {
    this.navCtrl.push(ProductPage, { data: index, type: type });
  }

}
