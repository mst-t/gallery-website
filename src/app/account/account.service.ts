import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.interface'

// Object handling firebase features created in the index.html.
declare var firebase: any;

/**
 * Account Service class
 * @class
 * @description
 * Store and provides data of the user's account.
 */
@Injectable()
export class AccountService {

  constructor(private router: Router) {}

  private isLogin: boolean = false;

  /**
   * Sign up the user and back to the home.
   * If the user already exist in the firebase, an error message will be displayed.
   */
  signUp(user: User) {
    var self = this;
    firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(function(){
      self.isLogin = true;
      self.router.navigate([''])
    })
    .catch(function(error) {
        alert(error.message);
    });
  }

  /**
   * Login the user and back to the home.
   * If the user does not exist in the firebase, an error message will be displayed.
   */
  login(user: User) {
    var self = this;
    firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(function(){
      self.isLogin = true;
      self.router.navigate([''])
    })
    .catch(function(error) {
        alert(error.message);
    });
  }

  /**
   * Logout the user and back to the home.
   */
  logout() {
    this.isLogin = false;
    firebase.auth().signOut();
    this.router.navigate(['']);
  }

  /**
   * Check the login status of the user.
   * @returns {boolean} isLogin Login status
   */
  getLoginStatus(): boolean {
    return this.isLogin;
  }
}
