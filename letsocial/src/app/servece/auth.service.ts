import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

interface user{
  name: string;
  uid:string;
}

export interface Post{
  info: string;
  data1:string;
  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:user
  private posts:Post
  
  constructor(private afauth:AngularFireAuth,
    private anfs:AngularFirestore,private route:Router) { }

    setUser(user:user){
      this.user=user
         
        }
      
        getUID(){
      
          if(!this.user){
            if(this.afauth.auth.currentUser){
              const user=this.afauth.auth.currentUser
              this.setUser({
                name:user.email.split('0')[0],
                uid:user.uid
              })
      
           return user.uid
             }else{
              throw new Error("user not logged in")
            }
      
          }else{
      
            return this.user.uid
           }
      
           return this.user.uid
        }
      
      
        getPost(posts:Post){
          this.posts= posts
        }
      
        getInfo(){
          if(!this.posts){
            if(this.afauth.auth.currentUser){
              const post=this.afauth.auth.currentUser
              this.getPost({
                info:this.posts.data1.split('0')[0],
                data1:this.posts.data1
      
      
              })
      
              return this.posts.info
            }
          }
        }  
}
