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
      "Favorite Article Clipper",
      `This application, named "Favorii", allows users to keep a favorite article with a short summary in their local storage.
       Once users enter url and press "save" or the enter key, the title, url, and a short sumarry are saved.
       The front-end is AngularJs and the back-end is Node. In addition, AYLIEN API is used to get a summary of articles.`,
      "./assets/images/favorii.png",
      "https://github.com/mst-t/Favorite-Article-Clipper",
      "https://sheltered-savannah-96980.herokuapp.com/",
      ["AngularJs(v-1.6)", "Express", "Node.js", "ECMAScript 6", "Bootstrap", "AYLIEN API"]),
    new Work(
      "Blackboard",
      `This is a simple TODO application powerd by MEAN stack. You can get, create, update, and delete messages using REST APIs.
       The web application is hosted on Heroku and the database is running on mLab. Click on the choke to enable or disable edit mode.
      `,
      "/assets/images/blackboard.png",
      "https://github.com/mst-t/blackboard",
      "https://sheltered-retreat-34258.herokuapp.com/",
      ["Angular4", "MongoDB", "Express", "Node", "Promise", "Angular CLI", "HTML5", "CSS3", "Bootstrap"]),
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
