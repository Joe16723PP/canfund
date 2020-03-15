import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../../../shared/models/user.model';
import * as firebase from 'firebase';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(public firebaseAuth: AngularFireAuth) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get UserValue(): User {
    return this.currentUserSubject.value;
  }

  // not available now
  onFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.firebaseAuth.auth
        .signInWithPopup(provider)
        .then(user => {
          resolve(user);
          // this.doManageUser(user);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  onGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.firebaseAuth.auth
        .signInWithPopup(provider)
        .then(user => {
          resolve(user);
        }, err => {
          reject(err);
        });
    });
  }

  onRegisterWithEmail(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then((user) => {
          resolve(user);
        }, (err) => {
          reject(err);
        });
    });
  }

  onLoginWithEmail(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then((user) => {
          // this.doManageUser(user);
          resolve(user);
        }, (err) => {
          reject(err);
        });
    });
  }

  onLogout() {
    firebase.auth().signOut().then(r => {}, err => {
      console.log(err);
    });
    localStorage.clear();
    this.currentUserSubject.next(null);
    window.location.reload(true);
  }
}
