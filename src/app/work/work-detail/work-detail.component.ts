import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Work } from '../work';
import { WorkService } from '../work.service';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'gallery-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})

/**
 * WorkDetailComponent class
 * @class
 * @description
 * Control the WorkDetailComponent.
 */
export class WorkDetailComponent implements OnDestroy {

  public work: Work;
  private id: string;
  private subscription: Subscription;

  constructor(private workService: WorkService, private router: Router,
              private activatedRoute: ActivatedRoute, private accountService: AccountService) {
    this.subscription = activatedRoute.params.subscribe(
      (param) => {
        this.id = param['id'];
        this.work = this.workService.getWork(+this.id);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Check the login status of the user.
   * @returns {boolean} isLogin Login status
   */
  onLoginStatus() {
    return this.accountService.getLoginStatus();
  }

}
