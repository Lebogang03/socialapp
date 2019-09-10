import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from 'src/app/servece/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ref;
  task: any;
  uploadState: any;
  uploadProgress: any;
  downloadURL: any;
 // imageURL:string
 id;
 name;
 url
 user: AngularFirestoreDocument;
 sub;
 photoURL:any;

  constructor(private fire:AngularFirestore, private chatapp:AuthService,
    private route:ActivatedRoute,  private afAuth: AngularFireAuth,private Storage: AngularFireStorage) {

      this.afAuth.auth.currentUser.photoURL;
   this.name=afAuth.auth.currentUser.displayName;

   this.user=fire.doc(`chat/${this.afAuth.auth.currentUser.uid}`)
   this.sub=this.user.valueChanges().subscribe(event=>{
     this.photoURL = event.photoURL
   })

     }

  ngOnInit() {
  }

  upload(event) {
    const file= event.target.files[0];
     this.id = Math.random().toString(36).substring(2);
    const filepath=this.id;
    this.ref = this.Storage.ref(filepath);
    const task = this.Storage.upload(filepath, file);
    this.uploadState = task.percentageChanges();
    
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL().subscribe(url=>{
          console.log(url);
          this.afAuth.auth.currentUser.updateProfile({
            photoURL: url
          })
          this.user.update({
            photoURL: url
          })
        })
      })
    ).subscribe();
  }
}
