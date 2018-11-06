import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { AngularFireAuth } from 'angularfire2/auth';
=======
// import { AngularFireAuth } from '@angular/fire/auth';
>>>>>>> 3e63128c154ea49dfcc30e0d26da5dcead377c82
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor (private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;

  }

  createUser (user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  // signOut() {
  //   return this.angularFireAuth.auth.signalOut();
  // }

}
