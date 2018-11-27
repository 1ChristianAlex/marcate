import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ModelPost } from './model.postView';
import { ActionSheetController } from "ionic-angular";
import { FeedPage } from "../feed";
import { PostPage } from "../post/post";
import { FirebaseServiceProvider } from "../../../providers/firebase-service/firebase-service";
import { ComentsPage } from "../coments/coments";
import { HtmlAstPath } from '@angular/compiler';
import { Storage } from "@ionic/storage";

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
  
  constructor(public navCtrl: NavController,private toasteCtrl:ToastController,public io_storage:Storage, public navParams: NavParams, private actionSheetCtrl:ActionSheetController,
    public fromFeed:FeedPage, private db:FirebaseServiceProvider) {
    }
    @Input() posts:ModelPost;

    ionViewDidLoad() {
      console.log('ionViewDidLoad PostViewPage');
    }
    infoFeed = this.fromFeed;
    
    presentActionSheet() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Opções',
        buttons: [
          {
            text: 'Editar',
            handler: () => {
              this.navCtrl.push(PostPage,{itemEdid:this.infoFeed.itemSelected});
            }
          },
          {
            text: 'Excluir',
            handler: () => {
              let key = this.infoFeed.itemSelected.$key;
              console.log(this.infoFeed.itemSelected.$key)
              this.db.removePost(key).then(dono =>{
                console.log(dono);
                  this.sucessToaster('Seu conteudo foi excluido')

              });
              
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      
      actionSheet.present();
    }
    sucessToaster(Messange:string){
      let toast = this.toasteCtrl.create(
        {
          message:Messange,
          duration:3000,
          position:'bottom'
        });
        toast.onDidDismiss(() =>{
          console.log('Dismissed toast');
        })
        toast.present();
      }
      goComents(){
        
        this.navCtrl.push(ComentsPage);
        (document.querySelector('.tabbar.show-tabbar') as HTMLElement).style.visibility = 'hidden'
      }
      likePost(){
        let  postLiked:ModelPost;
        this.io_storage.get('That_item').then(val =>{
            postLiked = {...val};
          
          
          
          console.log(postLiked)
         
        this.db.likePost(postLiked).then(like =>{
          console.log('like work')
        })
        })
        
      }
  }
  
  