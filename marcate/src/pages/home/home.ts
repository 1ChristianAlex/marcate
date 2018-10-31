import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
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
    public db: AngularFireDatabase
    ) {
      this.barbearias = this.db.list('barbearias').valueChanges();
      this.barbearias.subscribe((eachBarberShop) => eachBarberShop.forEach((item, index) => {
        console.log(eachBarberShop);
        this.markers[index] = this.mapObj.addMarker(item);
      }));
  }
    
  ionViewDidLoad (){
    console.log('bom dia');
  }

  markBarberShop (barberShop, index) {
    this.mapObj.moveToPoint(barberShop.lat, barberShop.long);
    this.mapObj.showInfoWindow(this.markers, index);
  }

  onScroll (event) {
    if (event.directionY == 'up') {
      this.fabR = -80;
    }
    if (event.directionY == 'down') {
      this.fabR = 30;
    }
  }

  openBarberShopProfile (barberShop) {
    // this.navCtrl.push(barberShop);
    console.log('boa noiteeeeeee')
  }

}
