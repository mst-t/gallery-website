import { Injectable } from '@angular/core';

import { Work } from './work';

/**
 * Work Service class
 * @class
 * @description
 * Store and provides data of works.
 */
@Injectable()
export class WorkService {

  private works: Array<Work> = [
    new Work(
      "Google Feed Reader",
      `This application is based on a Udacity project that tests existing features
       written in JavaScript and jQuery using Jasmine.
       I rebuilt this application in the test-driven method.
       After writing the tests using Jasmine, I implemented the functionalities using AngularJs.`,
      "./assets/images/feedReader.png",
      "https://github.com/mst-t/google-feed-reader",
      "http://artist-clamps-52452.netlify.com",
      ["AngularJs", "Jasmine", "Promise", "jQuery", "Ajax", "Test-driven Development", "Google Feed Reader API"]),
    new Work(
      "Montreal Island Map",
      `This is a Udacity project created to learn the MVVM pattern and Knockout.js
       which is one of the JavaScript frameworks useful for creating single-page applications.
       Icons and list items are displayed using the Google Map API and Knockout functions.
       By clicking on them, the information on the location is displayed on the map using the Wikipedia API.
       Also, I adopted the flat design, changed the design of the map, and selected icons suitable for it.
      `,
      "./assets/images/neighborhoodMap.png",
      "https://github.com/mst-t/neighborhood-map",
      "http://driver-polecat-44588.netlify.com",
      ["KnockoutJs", "Google Map API", "Wikipedia API", "MVVM Pattern", "Ajax", "Google Map Customization", "Flat Design"]),
    new Work(
      "Portfolio Design",
      `This is a web page created using Bootstrap, based on grid layout.
       I realized the responsive portfolio website with a concise and easy-to-see design.
       Also, I have implemented some animations using jQuery. The pictures show my favorite things.
      `,
      "./assets/images/portfolio.png",
      "https://github.com/mst-t/portfolio-design",
      "https://psychiatrist-goat-68182.netlify.com/",
      ["HTML5", "CSS3", "Bootstrap", "jQuery", "Animation", "Grid Layout", "Bower"]),
    new Work(
      "Gallery Website",
      `This is a single page application created using Angular(Angular4). Authentication function is implemented using Firebase.
       I am currently using this application as my portfolio, so the function is restricted.
       After signing up or logging in, the user can add, change, or delete information temporarily.
       Changed data will not be saved. When you press Reset or reload the webpage, the changed data will return to the initial state.
      `,
      "/assets/images/gallery.png",
      "https://github.com/mst-t/gallery-website",
      "https://mst-t.github.io",
      ["Angular4", "Firebase", "Auth", "Promise", "Angular CLI", "HTML5", "CSS3", "Bootstrap"]),
  ];

  private defaultWorks: Array<Work> = this.works.concat();

  constructor() {}

  /**
   * Return works.
   * @returns {Array<Work>} works
   */
  getWorks() {
    return this.works;
  }

  /**
   * Return a work object.
   * @param {number} id Id of work
   * @returns {Work} Work object specified by id
   */
  getWork(id: number): Work {
    return this.works[id];
  }

  /**
   * Append a work to the works.
   * @param {Work}
   */
  addWork(work: Work) {
    this.works.push(work);
  }

  /**
   * Update a work in the works.
   * @param {number} id Id of work
   * @param {Work} work
   */
  updateWork(id: number, work: Work) {
    this.works[id] = work;
  }

  /**
   * Reset the works to the default values.
   */
  resetWorks() {
    this.works = this.defaultWorks.concat();
    window.location.reload();
  }
}
