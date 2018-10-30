import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Platform } from 'ionic-angular';

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
    public alertCtrl: AlertController,
    private androidPermissions: AndroidPermissions,
    public plt: Platform
  ) {}

  ngOnInit () {
    if (this.plt.is('android')) {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.LOCATION_HARDWARE)
          .then(
            () => this.loadMap(true)
          )
          .catch(
            err => {
              console.log(err);
              this.loadMap(false);
            }
          )
    } else {
      this.loadMap(false)
    }
  }

  loadMap (init) {
    let mapOptions = {
      center: { lat: -19.8157, lng: -43.9542 },
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    if (init) {
      this.geolocation.getCurrentPosition().then((position) => {
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(latLng);
        this.map.setZoom(15);
        console.log('carregou o mapa mann');
      }, (err) => {
        console.log(err)
        let alert = this.alertCtrl.create({
          title: 'Erro de localização',
          message: 'Não foi possível utilizar sua localização!\n'+err,
          buttons: ['Fechar']
        });
        alert.present();
      });
    }
  }

  changeZoom (zoom) {
    this.map.setZoom(zoom);
  }

  moveToPoint (lat, long) {
    this.changeZoom(15);
    this.map.panTo({lat: lat, lng: long});
  }

  addMarker (barberShop) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(barberShop.lat, barberShop.long)
    });
    let content = barberShop.nome;
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
