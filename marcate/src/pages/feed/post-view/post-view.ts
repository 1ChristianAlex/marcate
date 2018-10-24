import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelPost } from './model.postView';

/**
 * Generated class for the PostViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-view',
  templateUrl: 'post-view.html',
})
export class PostViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  @Input() posts:ModelPost;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostViewPage');
  }

}
