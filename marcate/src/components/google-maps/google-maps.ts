import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";

declare var google;

@Component({
  selector: 'google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(
    public geolocation: Geolocation,
    public alertCtrl: AlertController
  ) {}

  ngOnInit () {
    this.loadMap();
  }

  loadMap () {
    let mapOptions = {
      center: { lat: -19.8157, lng: -43.9542 },
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.geolocation.getCurrentPosition().then((position) => {
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.map.panTo(latLng);
      this.map.setZoom(15);
      console.log('carregou o mapa mann');
    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Erro de localização',
        message: 'Não foi possível utilizar sua localização!',
        buttons: ['Fechar']
      });
      alert.present();
    });
  }

  changeZoom (zoom) {
    this.map.setZoom(zoom);
  }

  moveToPoint (lat, long) {
    this.map.panTo({lat: lat, lng: long});
  }

  addMarker (lat, long, barbershop) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: {lat: lat, lng: long}
    });
    let content = barbershop.nome;
    this.addInfoWindow(marker, content);
  }

  addInfoWindow (marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}
