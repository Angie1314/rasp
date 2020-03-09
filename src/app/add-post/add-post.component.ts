import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common';

import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  photoSrc: any;
  photoFile: File;
  description = '';
  price = '';
  user: User;
  isLoading = false;

  constructor(
    private storage: StorageService,
    private firebase: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth,
    private location: Location) { }

  ngOnInit() {
    this.firebaseAuth.user.subscribe(
      user => this.user = user
    );
  }

  loadFile($event: any): void {
    this.photoFile = $event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.photoSrc = reader.result;
    reader.readAsDataURL(this.photoFile);
  }

  createPost(): void {
    this.isLoading = true;
    const fileId = Date.now().toString();
    // TODO use cloud function for  making a post (http post)
    this.storage.uploadFile(this.photoFile, fileId)
      .then(() => {
        this.firebase.database.ref('/users/' + this.user.uid + '/files/' + fileId).update({
          description: this.description,
          price: this.price
        });
      })
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Upload successful',
          showConfirmButton: false,
          timer: 1500
        });
        this.location.back();
      }, (error) => {
        this.isLoading = false;
        // TODO show toast notification
        console.log(error);
      });
  }
}
