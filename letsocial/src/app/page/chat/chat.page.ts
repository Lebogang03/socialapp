import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/servece/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  userPosts: any;
  Username: string="";
  Password: string="";
  CPassword: string="";
 
  text:string;
  chatref:any;
  uid:string;

  constructor(private fire:AngularFirestore, private chatapp:AuthService,
    private route:ActivatedRoute,  private afAuth: AngularFireAuth) {

      this.uid=localStorage.getItem('chat');
      this.chatref=this.fire.collection('chat').valueChanges();
     }


    
  ngOnInit() {

  }

  Send(){
    console.log()
    if(this.text!=''){
      this.fire.collection('chat').add({
        Userid:this.afAuth.auth.currentUser.uid,
        Name:this.afAuth.auth.currentUser.displayName,
        Message:this.text,
        
      });
      this.text="";
    }
    
  }

}
