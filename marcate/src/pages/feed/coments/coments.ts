import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../../providers/firebase-service/firebase-service";
import { ModelPost } from "../post-view/model.postView";
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs';


/**
* Generated class for the ComentsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-coments',
  templateUrl: 'coments.html',
})
export class ComentsPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private db :FirebaseServiceProvider, public io_storage:Storage) {
  }
  @Input() coments:ModelPost
  postComment:ModelPost;
  writerComment:string;
  feedComments:Observable<ModelPost>[] = [] 
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentsPage');
    
  
  }
  ionViewDidEnter(){
    this.getItem();
  
  }
  ionViewDidLeave(){
  this.clearItem();
  (document.querySelector('.tabbar.show-tabbar') as HTMLElement).style.visibility = 'visible'
  }
  clearItem(){
    this.io_storage.remove('That_item').then(res =>{
      console.log('item was removed')
    })
  }
  getItem(){
    this.io_storage.get('That_item').then(val =>{
      this.postComment = val;
      this.listComents(val)
    })
    console.log(this.postComment)
   
  }
  createComment(){
    
    console.log('teste correto')
    console.log(this.postComment)
  
    
    this.db.createComment(this.postComment.$key,this.writerComment).then(
      item =>{
        console.log(item)
        this.writerComment = '';

      }
      )
    }
    
    listComents(key){      
      console.log('list has nice')
this.db.listComments(key.$key).subscribe(sub =>{
  sub.map((item,i)=>{
    this.feedComments[i] = ({...item.payload.val()} as any)
    console.log(this.feedComments[i])
  })
})
    }
    
  }
  