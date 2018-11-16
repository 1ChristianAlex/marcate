import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,  } from 'ionic-angular';

import { FirebaseServiceProvider } from '../../../providers/firebase-service/firebase-service';
import { ModelPost } from '../post-view/model.postView';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { storage } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dbService:FirebaseServiceProvider, private camera:Camera,private toasteCtrl:ToastController
    ) {
    }
    
    
    btnEdit:boolean = true;
    private myPhoto:any;
    in_post:string;
    keyEdit:any
    
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad PostPage');
      this.dbService.getPost();
      console.log(this.myPhoto)
      if (this.navParams.data.itemEdid !=undefined) {
        this.btnEdit = false;
        this.keyEdit = this.editPost();
      }
      else{
        this.btnEdit = true;
      }
    }
    
    goBack(){
      this.navCtrl.pop();
      (document.querySelector('.tabbar.show-tabbar') as HTMLElement).style.visibility = "visible";
    }
    getPhoto(){
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
    }
    getImage(){
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum:false
      }
      
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
    }
    
    
    post_save:ModelPost;
    
    
    
    savePost(){
      try {
        
        let today = new Date();
        this.post_save ={ userName : 'Teste Marcate',
        likeCount : 0,
        
        comentCount :0,
        postContent : this.in_post,
        imgPath : this.myPhoto,
        datePost : `${today.getHours().toString()}:${today.getMinutes().toString()}-${today.getDate().toString()}/${today.getMonth().toString()}` }
        if (this.post_save.postContent == null || this.post_save.postContent == 'undefined') {
          this.post_save.postContent ='';
        }
        console.log(this.post_save.postContent);
        this.dbService.savePost(this.post_save);
        this.goBack();
        this.saveImg();
        
        this.sucessToaster('Seu conteudo foi postado');
      } catch (error) {
        console.log(error)
      }
      
    }
    saveImg(){
      const image = this.myPhoto;
      const pic = storage().ref(`${this.post_save.userName}/${this.post_save.datePost}`);
      pic.putString(image, 'data_url');
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
      removeImage(){
        this.myPhoto = undefined;
      }
      editPost(){
        let postSelect:ModelPost = this.navParams.data.itemEdid;
        console.log(postSelect)
        this.myPhoto = postSelect.imgPath;
        this.in_post = postSelect.postContent;
        return postSelect.$key;
      }
      edPost(){
        let today = new Date();
        
        this.dbService.edPost(this.keyEdit,{
          datePost:`${today.getHours().toString()}:${today.getMinutes().toString()}-${today.getDate().toString()}/${today.getMonth().toString()}`,
          comentCount: 0,
          likeCount: 0,
          userName:"Teste Edit",
          imgPath:this.myPhoto,
          postContent:this.in_post
         }).then(
           i =>{
             this.goBack()
             this.sucessToaster('Seu conteudo foi editado');
           }
         )
      }
    }
    