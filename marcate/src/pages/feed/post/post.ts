import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FeedPage} from '../feed'

import { FileChooser } from "@ionic-native/file-chooser";
import { FileOpener } from "@ionic-native/file-opener";
import { FilePath } from "@ionic-native/file-path";


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser:FileChooser,
    private fileOpener:FileOpener, private filePath:FilePath) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  goBack(){
    this.navCtrl.pop();
    document.querySelector('.tabbar.show-tabbar').style.visibility = "visible";
  }
  getImage(){
    this.fileChooser.open().then(file=>{
      this.filePath.resolveNativePath(file).then(resolveFilePath =>{
        this.fileOpener.open(resolveFilePath,'aplication/image').then(value=>{
          alert('Worth')
        })
      })
    })
  }
}
