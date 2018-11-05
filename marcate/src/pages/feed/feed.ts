import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:FirebaseServiceProvider) {
  }

  feedPost:ModelPost[] = []
  
  FeedThe_feed(){
    
    this.db.post_list.subscribe((write_post)=> {
      write_post.reverse().forEach((post_object:ModelPost,i,array)=> {
        
        this.feedPost[i] = post_object;
        
        })
      })

      

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
}