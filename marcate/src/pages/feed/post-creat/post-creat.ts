import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostCreatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-creat',
  templateUrl: 'post-creat.html',
})
export class PostCreatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostCreatPage');
  }
  private showPost:boolean = false
  showPostBtn(){
    this.showPost = true;
    
  }
  hidePostBtn(){
    this.showPost = false;
  }
}
