import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from 'rxjs';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  barbearias: Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public geolocation: Geolocation, 
    public alertCtrl: AlertController,
    public db: AngularFireDatabase
    ) {
      this.barbearias = this.db.list('barbearias').valueChanges();
    }
    
  
  ionViewDidLoad (){
    console.log('bom dia');
  }

  markBarberShop (barberShop) {

  }

}
