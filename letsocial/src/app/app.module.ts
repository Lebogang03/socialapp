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
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcVnfFt0eGgkEFiLO79XBUxRdQSI_VEhU",
  authDomain: "users-9418b.firebaseapp.com",
  databaseURL: "https://users-9418b.firebaseio.com",
  projectId: "users-9418b",
  storageBucket: "users-9418b.appspot.com",
  messagingSenderId: "1078824787252",
  appId: "1:1078824787252:web:2c03b22901fdda61449961"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
   HttpClientModule, AngularFireModule.initializeApp(firebaseConfig,'newuser-f1d2a'),
   AngularFireAuthModule,HttpClientModule,AngularFireStorageModule,AngularFirestoreModule.enablePersistence()],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
