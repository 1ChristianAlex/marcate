import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  } from 'ionic-angular';

import { FirebaseServiceProvider } from '../../../providers/firebase-service/firebase-service';
import { ModelPost } from '../post-view/model.postView';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { storage } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dbService:FirebaseServiceProvider, private camera:Camera
    ) {
  }

  

  private myPhoto:any;
  in_post:string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
    this.dbService.getPost();
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
    let today = new Date()
    this.post_save ={ userName : 'Christian Teste',
    likeCount : 100,
    comentCount :0,
    postContent : this.in_post,
    imgPath : this.myPhoto,
    datePost : `${today.getHours().toString()} ${today.getDate().toString()} ${today.getMonth().toString()}  ` }
    console.log(this.post_save);
    this.dbService.savePost(this.post_save);
    this.goBack();
    this.saveImg();
  }
  saveImg(){
    const image = this.myPhoto;
    const pic = storage().ref(`${this.post_save.userName}/${this.post_save.datePost}`);
    pic.putString(image, 'data_url');
  }

}
