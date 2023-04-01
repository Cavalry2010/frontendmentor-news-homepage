"use strict";

class mobileNav {
  // SELECTING DOM ELEMENTS
  overlay = document.querySelector(".overlay");
  headerEl = document.querySelector(".nav-header");
  mobileBtn = document.querySelector(".nav-mobile-btn");
  navList = document.querySelector(".nav-list");

  constructor() {
    // ADDING EVENT LISTENERS
    this.mobileBtn.addEventListener("click", this.toggleNav.bind(this));
    this.overlay.addEventListener("click", this.toggleNav.bind(this));
    this.navList.addEventListener("click", this.linkGoTo.bind(this));
  }

  //   OPENS AND CLOSES THE MOBILE NAV
  toggleNav(e) {
    e.preventDefault();
    this.overlay.classList.toggle("hidden");
    this.headerEl.classList.toggle("nav-open");
    document.documentElement.classList.toggle("scroll-lock");
  }

  linkGoTo(e) {
    // SINCE THIS CHALLENGE DOESN'T HAVE MORE PAGES, CLICKING A LINK IN THE NAV WILL ONLY CLOSE THE NAV
    const target = e.target;

    if (target.tagName !== "A") return;
    this.overlay.classList.add("hidden");
    this.headerEl.classList.remove("nav-open");
    document.documentElement.classList.remove("scroll-lock");
  }
}

const nav = new mobileNav();
