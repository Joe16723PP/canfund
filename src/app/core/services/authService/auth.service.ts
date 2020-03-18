import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../../../shared/models/user.model';
import * as firebase from 'firebase';
import {User} from 'firebase';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserManagementService} from '../user-management/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;
  constructor(public firebaseAuth: AngularFireAuth,
              private http: HttpClient,
              public snackBar: MatSnackBar,
              public userService: UserManagementService) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get UserValue(): UserModel {
    // console.log(this.currentUserSubject.value);
    // if (this.currentUserSubject.value) {
    // return {
    //   displayName: this.currentUserSubject.value.displayName,
    //   email: this.currentUserSubject.value.email,
    //   emailVerified: this.currentUserSubject.value.emailVerified,
    //   uid: this.currentUserSubject.value.uid,
    //   photoURL: this.currentUserSubject.value.photoURL
    // };
    // } else {
    //   return null;
    // }

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
          // this.onManageUser(user);
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
          this.currentUserSubject.next(user.user);
          const url = environment.apiUrl + '/user/' + user.user.uid;
          this.http.get(url).subscribe(value => {
            this.onManageUser(user);
            resolve(user);
          }, error => {
            this.writeUserToDatabase(user).then(value => {
              this.onManageUser(user);
              resolve(user);
            }).catch(reason => {
              reject(reason.message);
            });
          });
        }, err => {
          reject(err);
        });
    });
  }

  onRegisterWithEmail(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then((user) => {
          this.writeUserToDatabase(user, value).then(value1 => {
            this.onManageUser(user);
            resolve(user);
          }).catch(reason => {
            reject(reason.message);
          });
        }, (err) => {
          reject(err);
        });
    });
  }

  onLoginWithEmail(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then((user) => {
          this.onManageUser(user);
          resolve(user);
        }, (err) => {
          reject(err);
        });
    });
  }
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  onManageUser(user) {
    this.userService.getUserDetailFromDatabase(user.user.uid)
      .subscribe((value) => {
        // console.log(value.user);
        localStorage.setItem('currentUser', JSON.stringify(value.user));
    });
    // const localUser: UserModel = {
    //   displayName: user.user.displayName,
    //   email: user.user.email,
    //   emailVerified: user.user.emailVerified,
    //   photoURL: user.user.photoURL,
    //   uid: user.user.uid};
    // localStorage.setItem('currentUser', JSON.stringify(localUser));
    // return result;
  }

  // clear localStorage and subject
  onLogout() {
    firebase.auth().signOut().then(r => {}, err => {
      console.log(err);
    });
    localStorage.clear();
    this.currentUserSubject.next(null);
    window.location.reload(true);
  }

  // create user to our database
  private writeUserToDatabase(user: firebase.auth.UserCredential, customUser?: UserModel) {
    const localUser: UserModel = {
      displayName: user.user.displayName,
      email: user.user.email,
      emailVerified: user.user.emailVerified,
      photoURL: user.user.photoURL,
      uid: user.user.uid};
    if (customUser) {
      localUser.displayName = customUser.displayName;
    }
    const url = environment.apiUrl + '/user';

    return new Promise<boolean>((resolve, reject) => {
      this.http.post(url, localUser).subscribe(value => {
        resolve(true);
        this.snackBar.open('write user to database', 'close', {duration: 3000});
      }, error => {
        reject(false);
        this.snackBar.open(error.message, 'close', {duration: 3000});
      });
    });
  }
}
