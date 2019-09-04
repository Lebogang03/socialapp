import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, firestore } from 'firebase/app';

import {AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from 'src/app/servece/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Email: string="";
  pdw: string="";

  constructor(private router:Router,private afAuth: AngularFireAuth,
    private fire:AngularFirestore, private chatapp:AuthService, private route:Router,private nav:NavController) { }

  ngOnInit() {
  }


   login()
{
this.afAuth.auth.signInWithEmailAndPassword(this.Email,this.pdw).then(()=>{
  this.nav.navigateForward('/chat')
}).catch(err=>{
  alert(err.message);
})
}

goto_signup(){
  this.nav.navigateForward('/home');
}






}
