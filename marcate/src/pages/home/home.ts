import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(
    public navCtrl: NavController, 
    public geolocation: Geolocation, 
    public alertCtrl: AlertController,
    ) { }
    
  barbearias =  [
    {
      nome: 'Teste 1'
    },
    {
      nome: 'Teste 2'
    },
  ];
  
  ionViewDidLoad (){
    console.log('bom dia');
  }

}
