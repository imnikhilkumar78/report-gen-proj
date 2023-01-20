import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor(
    public afs: AngularFirestore, //Injecting Firestore Services
    public afAuth: AngularFireAuth, //Injecting Firebase auth Services
    public router: Router,
    public ngZone: NgZone //NgZone Services to remove outside scope warning)
  ) {}

  getAllNormalUsers() {
    return this.afs.collection('normal-users').snapshotChanges();
  }
  getUserWithEmail(userEmail) {
    return this.afs
      .collection('normal-users', (ref) =>
        ref.where('UserEmail', '==', userEmail)
      )
      .valueChanges();
  }
}
