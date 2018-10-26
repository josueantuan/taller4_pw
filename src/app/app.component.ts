import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { MarcaPage } from '../pages/marca/marca';
import { SitioPage } from '../pages/sitio/sitio';
import { DirecPage } from '../pages/direc/direc';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  marca = MarcaPage;
  sitio = SitioPage;
  direc = DirecPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }
  openPage(page:any){
    this.rootPage = page;
    this.menuCtrl.close();
  }
}

