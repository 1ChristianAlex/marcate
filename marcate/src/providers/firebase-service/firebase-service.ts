import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModelPost } from '../../pages/feed/post-view/model.postView';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public db: AngularFireDatabase, private toasteCtrl:ToastController) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  savePost(post_save:ModelPost){
    this.db.list('DB_POSTS').push(post_save)
    .then(r => {
      console.log(r);
    });
  }
  // getPost(){
  //   this.db.list('DB_POSTS').snapshotChanges().map(data =>{
  //     return data.map(d => ({key:d.key,...d.payload.val()}));

  //     });
    
  // }
  sucessToaster(){
    let toast = this.toasteCtrl.create(
      {
        message:'Sucesso na postagem',
        duration:3000,
        position:'bottom'
      });
      toast.onDidDismiss(() =>{
        console.log('Dismissed toast');
      })
  }
}
