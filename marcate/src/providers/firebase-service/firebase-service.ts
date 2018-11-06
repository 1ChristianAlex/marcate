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
  list_ofpost:any;

  savePost(post_save:ModelPost){
    this.db.list('DB_POSTS').push(post_save)
    .then(r => {
      console.log(r);
    });
  }
  getPost():any{
    
    this.post_list = this.db.list('DB_POSTS').valueChanges();

    
  }

}
