import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import{AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../servece/auth.service';
import { firestore } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Username:string;
  Email:string;
  pdw:string

  constructor(private afAuth: AngularFireAuth, private fire:AngularFirestore,
    private alert:AlertController,private route:Router,
    private chatapp:AuthService, private nav:NavController) {}


 signup(){
   this.afAuth.auth.createUserWithEmailAndPassword(this.Email,this.pdw).then(()=> {
     localStorage.setItem('userid',this.afAuth.auth.currentUser.uid);
     this.fire.collection('chat').doc(this.afAuth.auth.currentUser.uid).set({
       displayName:this.Username,
       uid:this.afAuth.auth.currentUser.uid,
       Timestamp:firestore.FieldValue.serverTimestamp(),
       Email:this.Email,
       photoURL:''
    }).catch(error=>{
      alert(error.message)
    })
     
     this.afAuth.auth.currentUser.updateProfile({
       displayName:this.Username,
       photoURL:''

     }).then(()=> {
       this.nav.navigateRoot('/login');

     }).catch(err=>{
alert(err.message)   
  })
   }).catch(err=>{
     alert(err.message)
   })
 }

goto_login(){
  this.nav.navigateForward('/login');
}
}


