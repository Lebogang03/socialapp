import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// import { AngularFireModule } from '@angular/fire';
// import{AngularFirestoreModule} from '@angular/fire/firestore';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// import{AngularFireAuthModule} from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './servece/auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBPuLtG6HsZFZooqwdP4K1bmjQqopZ7Aiw",
  authDomain: "newuser-f1d2a.firebaseapp.com",
  databaseURL: "https://newuser-f1d2a.firebaseio.com",
  projectId: "newuser-f1d2a",
  storageBucket: "",
  messagingSenderId: "84622886924",
  appId: "1:84622886924:web:a0ee384acf9c43bc"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
   HttpClientModule, AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,HttpClientModule,AngularFirestoreModule.enablePersistence()],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
