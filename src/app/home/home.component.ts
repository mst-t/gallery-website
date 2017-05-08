import { Component, OnInit } from '@angular/core';

import { WorkService } from '../work/work.service';

@Component({
  selector: 'gallery-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/**
 * HomeComponent class
 * @class
 * @description
 * Control the HomeComponent.
 */
export class HomeComponent implements OnInit {

  public works = [];
  constructor(private workService: WorkService) {
    this.works = this.workService.getWorks();
  }

  ngOnInit() {
  }
}
