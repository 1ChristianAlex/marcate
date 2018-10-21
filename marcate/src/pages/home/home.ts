import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { GoogleMapsComponent } from '../../components/google-maps/google-maps';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild(GoogleMapsComponent) googleMaps: GoogleMapsComponent;

  constructor(
    public navCtrl: NavController, 
    public geolocation: Geolocation, 
    public alertCtrl: AlertController
    ) { }
    
  barbearias =  [
    {
      nome: 'Teste 1',
      lat: -19.9617813,
      long: -43.9952127
    },
    {
      nome: 'Teste 2',
      lat: -19.946592,
      long: -43.933207
    },
  ];
  
  ionViewDidLoad (){
    console.log('bom dia');
  }

  showbarbershop (barbershop) {
    this.googleMaps.moveToPoint(barbershop.lat, barbershop.long);
    console.log(this.googleMaps.map.getBounds().contains({lat: barbershop.lat, lng: barbershop.long}));
    if (this.googleMaps.map.getBounds().contains({lat: barbershop.lat, lng: barbershop.long})) {
      this.googleMaps.addMarker(barbershop.lat, barbershop.long, barbershop);
    }
  }
}
