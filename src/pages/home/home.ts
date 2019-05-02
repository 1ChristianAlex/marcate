import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('map') mapObj;

  barbearias: Observable<any[]>;
  markers = [];

  fabR:number = 30;

  constructor(

    public navCtrl: NavController, 
    public geolocation: Geolocation, 
    public alertCtrl: AlertController,
    public db: AngularFireDatabase,
    private loading:LoadingController
    ) { }
    
  ionViewDidLoad (){
    try {
        this.barbearias = this.db.list('barbearias').valueChanges();
        this.loadingBox('Carregando lista de barbearias, aguarde...');
	      this.barbearias.subscribe((eachBarberShop) => eachBarberShop.forEach((item, index) => {
	        this.markers[index] = this.mapObj.addMarker(item);
	      }));
	  } catch (err) {
	  	console.log('deu ruim dmssss');
    }
  
  }

  markBarberShop (barberShop, index) {
    this.mapObj.moveToPoint(barberShop.lat, barberShop.long);
    this.mapObj.showInfoWindow(this.markers, index);
  }

  onScroll (event) {
    if (event.directionY == 'down') {
      this.fabR = -80;
    }
    if (event.directionY == 'up') {
      this.fabR = 30;
    }
  }

  loadingBox(text) {
    const loader = this.loading.create({
      content: text,
      duration: 3000
    });
    loader.present();
  }

}
