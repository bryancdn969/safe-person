import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { CommonProvider } from "../../providers/common/common";
import {TranslateService} from "@ngx-translate/core";

declare var google;

@IonicPage()
@Component({
  selector: 'page-geolocationpeople',
  templateUrl: 'geolocationpeople.html',
})
export class GeolocationpeoplePage {
  map: any;
  @ViewChild('map') mapElement: ElementRef;
  loginErrorString: string;
  requiredData: string;

  constructor(public common: CommonProvider,public translateService: TranslateService,
    private navCtrl: NavController,
    private geolocation: Geolocation
  ) {
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
    this.translateService.get('REQUIRED_DATA').subscribe((value) => {
      this.requiredData = value;
    });

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){
    this.common.presentLoading();
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      let content = `<h4>${"Yuor position"}</h4>`;
      this.addInfoWindow(marker, content);
      this.common.closeLoading();
    }, (err) => {
      console.log(err);
      this.common.closeLoading();
    });
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}
