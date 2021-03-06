import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
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

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }

  signIn(user) {
    return this.angularFireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
  }

}
