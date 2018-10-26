import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GeolocalitationProvider } from "../../providers/geolocalitation/geolocalitation";
import { MouseEvent } from '@agm/core';

@IonicPage()
@Component({
  selector: 'page-sitio',
  templateUrl: 'sitio.html',
})
export class SitioPage {
  lat:any;
  lng:any;
  latC:any;
  lngC:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public geoloca:GeolocalitationProvider) {
    this.lat = this.geoloca.latD;
    this.lng = this.geoloca.lngD;
  }
  cerrar(){
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad(){
    this.geoloca.geolocal();
   }
  ngOnInit() { 
    this.lat = this.geoloca.latD;
    this.lng = this.geoloca.lngD;
  }
  mapClicked($event: MouseEvent) {
    this.latC= $event.coords.lat;
    this.lngC= $event.coords.lng;
    console.log(this.latC,this.lngC);
  }
}
