import { Component } from '@angular/core';

@Component({
  selector: 'gallery-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

/**
 * AboutComponent class
 * @class
 * @description
 * Control the AboutComponent.
 */
export class AboutComponent {

  constructor() { }

  public isOpen: boolean = false;
  public message: string = 'Read More';
  public skills: Array<Object> = [
    {"title":'Language:',
     "items": ['HTML5', 'CSS3', 'JavaScript', 'ECMAScript 6', 'TypeScript', 'Python', 'Java']},
    {"title": 'Library and Framework:',
     "items": ['jQuery', 'Bootstrap', 'Jasmine', 'AngularJs', 'Angular','Knockout', 'Node', 'Express']},
    {"title":'Knowledge:',
     "items":[
      'MVVM Pattern', 'Object Oriented Programming', 'Test-driven Development',
      'SPA Developement', 'Ajax', 'Promise', 'Google Map API', 'SQL', 'MongoDB']},
    {"title": 'Tool:',
     "items":['Git', 'Bower', 'Firebase', "mLab", "Heroku" ]}
  ];

  /**
   * Display or hide text.
   */
  onReadMore() {
    this.isOpen = !this.isOpen;
    if(this.isOpen) {
      this.message = 'Hide Text';
    } else {
      this.message = 'Read More';
    }
  }

}
