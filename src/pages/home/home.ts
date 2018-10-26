import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { GeolocalitationProvider } from "../../providers/geolocalitation/geolocalitation";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private menuCtrl : MenuController,private geoloca:GeolocalitationProvider) {
    
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    
  }
  ionViewDidLoad(){
    this.geoloca.geolocal();
   }
  cerrar(){
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }
}
