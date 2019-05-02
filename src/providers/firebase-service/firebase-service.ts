import { User } from './../auth/user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModelPost } from '../../pages/feed/post-view/model.postView';

import { Observable } from 'rxjs';
// import { FeedPage } from '../../pages/feed/feed';


/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }
  post_list:Observable<any[]>;
  user:Observable<any[]>;
  list_ofpost:any;

  savePost(post_save:ModelPost){
    this.db.list('DB_POSTS').push(post_save)
    .then(r => {
      console.log(r);
    });
  }

  saveUser(user: User){
    this.db.list('usuarios').push(user)
    .then(r => {
      console.log(r);
    });
  }

  getUser ():any {
    this.user = this.db.list('usuarios').valueChanges();
  }

  getPost():any{

    this.post_list = this.db.list('DB_POSTS').snapshotChanges();


  }
  removePost(key){
    
    return this.db.list('DB_POSTS').remove(key)
    }
  edPost(key,post:ModelPost){
    return this.db.list('DB_POSTS').update(key,post);
  }
  createComment(key,postComment:string){
    let date = new Date()
    let today = {
      dia:date.getMinutes(),
      comentario:postComment,
      currentUser:'Christian Teste'
    }
    return this.db.list(`DB_POSTS/${key}/comments`).push(today)
  }
  listComments(key){
    return this.db.list(`DB_POSTS/${key}/comments`).snapshotChanges();
  }
  likePost(post:ModelPost){
    let key = post.$key;
    let like:number;
    if (post.likeCount == undefined ||post.likeCount ==null) {
      post.likeCount = 0
    }
    like = post.likeCount +1;
    console.log(post.likeCount);
    return this.db.list('DB_POSTS').update(key,{
      userName:post.userName,
      datePost:post.datePost,
      imgPath:post.imgPath,
      postContent:post.postContent,
      likeCount:like,
   
    });
  }
}
