import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MarcaPage } from '../pages/marca/marca';
import { DirecPage } from '../pages/direc/direc';
import { SitioPage } from '../pages/sitio/sitio';
import { BaseProvider } from '../providers/base/base';
//----------------------------------------------
import { GeolocalitationProvider } from '../providers/geolocalitation/geolocalitation';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {HttpModule} from "@angular/http";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MarcaPage,
    DirecPage,
    SitioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'
    }),
    AgmDirectionModule,
    HttpClientModule,
  
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MarcaPage,
    DirecPage,
    SitioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseProvider,
    Geolocation,
    GeolocalitationProvider
    
  ]
})
export class AppModule {}
