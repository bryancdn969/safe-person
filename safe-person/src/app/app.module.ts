import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {WelcomePage} from "../pages/welcome/welcome";
import {SignupPage} from "../pages/signup/signup";
import {GeolocationpeoplePage} from "../pages/geolocationpeople/geolocationpeople";
import { UserServiceProvider } from '../providers/user-service/user-service';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { GoogleMaps } from '@ionic-native/google-maps';
import {Geolocation} from "@ionic-native/geolocation";
import { CommonProvider } from '../providers/common/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {ContacfriendPage} from "../pages/contacfriend/contacfriend";
import {CloudModule} from "@ionic/cloud-angular";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    GeolocationpeoplePage,
    ContacfriendPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    CloudModule.forRoot({
      core: {
        app_id: '7373380c'
      },
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    GeolocationpeoplePage,
    ContacfriendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    CommonProvider
  ]
})
export class AppModule {}
