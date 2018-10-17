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
      mapTypeId: google.maps.MapTypeId.ROADMAP
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

  addMarker () {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Você está aqui!!</h4>";
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
