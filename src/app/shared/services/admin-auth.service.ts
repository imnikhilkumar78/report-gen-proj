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
export class AdminAuthService {
  uid: string; //to save userId
  userData: any; //to save logged in user data
  constructor(
    public afs: AngularFirestore, //Injecting Firestore Services
    public afAuth: AngularFireAuth, //Injecting Firebase auth Services
    public router: Router,
    public ngZone: NgZone //NgZone Services to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  //sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            if (user.emailVerified == true) {
              this.router.navigate(['admin-dashboard']);
            } else {
              this.router.navigate(['verify-email']);
            }
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forgot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  //logout
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home-dashboard']);
    });
  }

  //CRUD FUNCTIONALITIES
  //List all Users
  getUserList() {
    return this.afs.collection('normal-users').snapshotChanges();
  }

  //To Add New Normal User
  form = new FormGroup({
    uid: new FormControl(''),
    UserName: new FormControl(''),
    UserEmail: new FormControl(''),
    userPassword: new FormControl(''),
  });

  //function
  createNewUser(userData) {
    this.afs.collection('normal-users').doc(userData.uid).set(userData);
  }

  //add-report
  formReport = new FormGroup({
    rid: new FormControl(''),
    productivity: new FormControl(''),
    weeklyProdPoint: new FormControl(''),
    productivityPoint: new FormControl(''),
    PKTScore: new FormControl(''),
    escalations: new FormControl(''),
    qualityPoint: new FormControl(''),
    identification: new FormControl(''),
    documentation: new FormControl(''),
    implementation: new FormControl(''),
    knowledgeScore: new FormControl(''),
    leaveAdherence: new FormControl(''),
    ownershipPoints: new FormControl(''),
  });

  getUserId(uid: string) {
    this.uid = uid;
    console.log(this.uid);
  }

  createNewReport(reportData) {
    this.afs
      .collection('normal-users/' + this.uid + '/reports')
      .add(reportData);
  }
}
