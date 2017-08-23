import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.min";
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.triggerElement = $(".large-hero__title");
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.create_header_waypoint();
    this.create_page_section_waypoints();
    this.add_smooth_scrolling();
  }

  create_header_waypoint() {
    let that = this;

    new Waypoint({
      element: that.triggerElement[0],
      handler: (direction) => {
        // change background-colorfor medium/large screens using the Waypoint
        if(direction == "down" && $(window).width() >= 768) {
          that.siteHeader.addClass("site-header--dark");
          that.siteHeader.css("background-color", "rgba(23, 51, 72, 0.85)");
        }
        else {
          that.siteHeader.removeClass("site-header--dark");
          that.siteHeader.css("background-color", "rgba(47,85,114,.3)");
        }
      }
    });
  }

  add_smooth_scrolling() {
    this.headerLinks.smoothScroll();
  }

  create_page_section_waypoints() {
    let that = this;

    for(let section of this.pageSections) {
      new Waypoint({
        element: section,
        handler: (direction) => {
          if(direction == "down") {
            let matchingHeaderLink = section.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: section,
        handler: (direction) => {
          if(direction == "up") {
            let matchingHeaderLink = section.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    }
  }
}

export default StickyHeader;
