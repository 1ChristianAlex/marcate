import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostPage } from './post/post'
import { ModelPost } from './post-view/model.postView';



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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  feedPost:ModelPost[] = [
    {
      userName:'Christian Alexsander',
      datePost:"Today",
      imgPath:"assets/imgs/corte.jpg",
      postContent:"Miles Morales nascido em 3 de Agosto de 2002, é um super-herói fictício que aparece nas histórias em quadrinhos publicadas pela Marvel Comics, como um dos personagens que tem a identidade de Homem-Aranha. O personagem foi criado pelo escritor Brian Michael Bendis e o desenhista Sara Pichelli, e o editor-chefe Marvel Axel Alonso desenharam Miles com inspiração do presidente dos Estados Unidos Barack Obama e o ator americano Donald Glover.",
      likeCount:550,
      comentCount:20
    },
    {
      userName:'Christian Alexsander',
      datePost:"Today",
      imgPath:"assets/imgs/thumb.jpg",
      postContent:"Miles Morales nascido em 3 de Agosto de 2002, é um super-herói fictício que aparece nas histórias em quadrinhos publicadas pela Marvel Comics, como um dos personagens que tem a identidade de Homem-Aranha. O personagem foi criado pelo escritor Brian Michael Bendis e o desenhista Sara Pichelli, e o editor-chefe Marvel Axel Alonso desenharam Miles com inspiração do presidente dos Estados Unidos Barack Obama e o ator americano Donald Glover.",
      likeCount:550,
      comentCount:20
    }
  ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  createPost(){
    this.navCtrl.push(PostPage);
    (document.querySelector('.tabbar.show-tabbar') as HTMLElement).style.visibility = "hidden";
}
}