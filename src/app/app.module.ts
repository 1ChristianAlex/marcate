import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "angularfire2/auth";

import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPage } from '../pages/feed/feed';
import { PostPage } from '../pages/feed/post/post';
import { GoogleMapsComponent } from '../components/google-maps/google-maps';
import { BarbeariaPage } from "../pages/barbearia/barbearia";
import { ProductPage } from "../pages/product/product";
import { ComentsPage } from "../pages/feed/coments/coments";

import { AuthService } from '../providers/auth/auth-service';

import { PostViewPage } from  '../pages/feed/post-view/post-view'
import { HeaderPage } from '../pages/header/header'
import { FIREBASE_CONFIG } from './app.firebase.config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from "@ionic-native/camera";

import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { IonicStorageModule } from "@ionic/storage";

// const fireaseConfig = {
//     apiKey: "AIzaSyDkLNagEN4Z27Tzl6Kiq1AHJMpXT1j-kgo",
//     authDomain: "marcate-una.firebaseapp.com",
//     databaseURL: "https://marcate-una.firebaseio.com",
//     projectId: "marcate-una",
//     storageBucket: "marcate-una.appspot.com",
//     messagingSenderId: "418090050537"
// }

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    PostViewPage,
    LoginPage,
    HeaderPage,
    PostPage,
    ComentsPage,
    BarbeariaPage,
    ProductPage,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ComentsPage,
    TabsPage,
    FeedPage,
    PostViewPage,
    LoginPage,
    HeaderPage,
    PostPage,
    ProductPage,
    BarbeariaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AndroidPermissions,
    GoogleMapsComponent,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    Camera,
    AuthService,
  ]
})
export class AppModule {}
