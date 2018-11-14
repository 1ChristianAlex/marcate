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

    this.post_list = this.db.list('DB_POSTS').valueChanges();


  }
  removePost(key){
    
    this.db.list('DB_POSTS').remove(key).then(
      () =>{
        console.log(key);
      }
      );
    }
    returnKey(){
       this.db.list('DB_POSTS').snapshotChanges().subscribe((write_post)=> {
        write_post.map(item =>{
          item.payload.key
        })
        })
    }
}
