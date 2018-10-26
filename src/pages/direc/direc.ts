import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GeolocalitationProvider } from "../../providers/geolocalitation/geolocalitation";
import { MouseEvent } from '@agm/core';

@IonicPage()
@Component({
  selector: 'page-direc',
  templateUrl: 'direc.html',
})
export class DirecPage {
  lat:any;
  lng:any;
  latC:any;
  lngC:any;
  public origin: any;
  public destination: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geoloca:GeolocalitationProvider) {
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
    this.getDirection();
  }
  getDirection() {
    this.origin = { lat: this.geoloca.latD, lng: this.geoloca.lngD }
    this.destination = { lat: -0.167765, lng: -78.489688 } 
  }
  mapClicked($event: MouseEvent) {
    this.latC= $event.coords.lat;
    this.lngC= $event.coords.lng;
    this.destination = { lat: this.latC, lng: this.lngC }
    console.log(this.latC,this.lngC);
  }
}
