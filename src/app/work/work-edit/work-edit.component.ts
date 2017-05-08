import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

import { Work } from '../work';
import { WorkService } from '../work.service';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'gallery-work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.css']
})

/**
 * WorkEditComponent class
 * @class
 * @description
 * Control the WorkEditComponent.
 */
export class WorkEditComponent implements OnInit, OnDestroy {
  public myForm: FormGroup;
  public work: Work;
  public imagePath: string;
  private id: string;
  private subscription: Subscription;

  constructor(private workService: WorkService, private router: Router,
              private activatedRoute: ActivatedRoute, private accountService: AccountService,
              private fb: FormBuilder) {
    this.subscription = activatedRoute.params.subscribe(
      (param) => {
        this.id = param['id'];
        this.work = this.workService.getWork(+this.id);
      }
    );
  }

  ngOnInit() {
    this.imagePath = this.work.imagePath;
    this.myForm = this.fb.group({
        name: this.work.name,
        description: this.work.description,
        imagePath: this.work.imagePath,
        gitUrl: this.work.gitUrl,
        activeUrl: this.work.activeUrl,
        skills: new FormArray([new FormControl('HTML')])
    });
    const len = this.work.skills.length;
    for(let i=0; i < len; i++) {
      (<FormArray>this.myForm.get('skills')).push(new FormControl(this.work.skills[i]));
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Create a "skill".
   */
  onAddItem() {
    const control = new FormControl([null]);
    (<FormArray>this.myForm.get('skills')).push(control);
  }

  /**
   * Delete a "skill".
   * @param {number} index the index of the skills array
   */
  onDeleteItem(index: number) {
    (<FormArray>this.myForm.controls['skills']).removeAt(index);
  }

  /**
   * Update a work information by cliciking on the "Save" button.
   */
  onUpdateWork() {
    const work = new Work(
      this.myForm.value.name,
      this.myForm.value.description,
      this.myForm.value.imagePath,
      this.myForm.value.gitUrl,
      this.myForm.value.activeUrl,
      this.myForm.value.skills);
    this.workService.updateWork(+this.id, work);
  }

}
