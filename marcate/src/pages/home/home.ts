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

  fabR:number = 30;

  constructor(
    public navCtrl: NavController, 
    public geolocation: Geolocation, 
    public alertCtrl: AlertController,
    public db: AngularFireDatabase
    ) {
      this.barbearias = this.db.list('barbearias').valueChanges();
      this.barbearias.subscribe((asd) => asd.forEach(item => this.mapObj.addMarker(item)));
  }
    
  ionViewDidLoad (){
    console.log('bom dia');
  }

  markBarberShop (barberShop) {
    this.mapObj.moveToPoint(barberShop.lat, barberShop.long);
    console.log(barberShop);
  }

  onScroll (event) {
    console.log(event, this.fabR)
    if (event.directionY == 'up') {
      this.fabR = -80;
    }
    if (event.directionY == 'down') {
      this.fabR = 30;
    }
  }

}
