import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Work } from '../work';
import { WorkService } from '../work.service';

@Component({
  selector: 'gallery-work-add',
  templateUrl: './work-add.component.html',
  styleUrls: ['./work-add.component.css']
})

/**
 * WorkAddComponent class
 * @class
 * @description
 * Control the WorkAddComponent.
 */
export class WorkAddComponent implements OnInit {

  public myForm: FormGroup;
  public imagePath: string = './assets/images/gallery.jpeg';
  constructor(
    private fb: FormBuilder,
    private workService: WorkService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
        name: ['Art Gallery', Validators.required],
        description: "You can add your work. Currently, you cannot save data in the database. You can only see how your work will be added to the home.",
        imagePath: [this.imagePath, Validators.required],
        gitUrl: "https://example.com",
        activeUrl: "",
        skills: new FormArray([new FormControl('HTML'), new FormControl('CSS')])
    });
  }

  /**
   * Create a "skill".
   */
  onAddItem() {
    const control = new FormControl([null]);
    (<FormArray>this.myForm.get('skills')).push(control);
  }

  /**
   * Delete a "skill"
   * @param {number} index the index of the skills array.
   */
  onDeleteItem(index: number) {
    (<FormArray>this.myForm.controls['skills']).removeAt(index);
  }

  /**
   * Create a work information by pressing the "Save" button.
   */
  onSaveWork() {
    this.workService.addWork(
      new Work(this.myForm.value.name,
               this.myForm.value.description,
               this.myForm.value.imagePath,
               this.myForm.value.gitUrl,
               this.myForm.value.activeUrl,
               this.myForm.value.skills));
  }

}
