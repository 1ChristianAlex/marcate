import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {PostPage } from './post/post'
import { ModelPost } from './post-view/model.postView';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';




/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:FirebaseServiceProvider,
    private loading:LoadingController) {
  }

  feedPost:ModelPost[] = []
  itemSelected:ModelPost;
  

  FeedThe_feed(){
    this.loadingBox();
    this.db.post_list.subscribe((write_post)=> {
      write_post.forEach((post_object:ModelPost,i,array)=> {
        this.feedPost.push(post_object)
      
        })
      })
  }

  loadingBox() {
    const loader = this.loading.create({
      content: "Por favor aguarde...",
      duration: 3000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.db.getPost();
    this.FeedThe_feed();

    
  }

  createPost(){
    this.navCtrl.push(PostPage);
    (document.querySelector('.tabbar.show-tabbar') as HTMLElement).style.visibility = "hidden";
}
countItem(item:ModelPost):ModelPost{
  this.itemSelected = item;
  console.log(this.itemSelected);
  return this.itemSelected;
}
}