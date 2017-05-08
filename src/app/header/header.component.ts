import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { AccountService } from '../account/account.service';
import { WorkService } from '../work/work.service';

@Component({
  selector: 'gallery-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/**
 * HeaderComponent class
 * @class
 * @description
 * Control the HeaderComponent.
 */
export class HeaderComponent {

  private isLogin: boolean = false;
  constructor(private accountService: AccountService, private workService: WorkService) { }

  /**
   * Logout the user
   */
  onLogout() {
    this.accountService.logout();
  }

  /**
   * Check the login status of the user.
   * @returns {boolean} isLogin Login status
   */
  onLoginStatus() {
    return this.accountService.getLoginStatus();
  }

  /**
   * Reset the works to the default values by pressing "Reset" in the header.
   */
  onReset() {
    this.workService.resetWorks();
  }
}
