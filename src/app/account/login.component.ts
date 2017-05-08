import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

import { AccountService } from './account.service';

@Component({
  selector: 'gallery-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * LoginComponent class
 * @class
 * @description
 * Control the LoginComponent.
 */
export class LoginComponent implements OnInit {

  public isUser: boolean = true;
  public buttonValue = "Login";
  public linkValue = "Sign Up"

  public myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
        email: ['example@example.com', Validators.required],
        password: ['password', Validators.required],
    });
  }

  /**
   * Login or Sign up according to the user's selection.
   */
  onAuth() {
    if(this.isUser) {
      this.accountService.login(this.myForm.value);
    } else {
      this.accountService.signUp(this.myForm.value);
    }
  }

  /**
   * Select "Login" or "SIgn Up".
   */
  onSwitchAction() {
    this.isUser = !this.isUser;
    if(this.isUser) {
      this.buttonValue = "Login";
      this.linkValue = "Sign Up";
    } else {
      this.buttonValue = "Sign Up";
      this.linkValue = "Login";
    }
  }
}
