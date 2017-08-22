import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.min";

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.triggerElement = $(".large-hero__title");
    this.pageSections = $(".page-section");
    this.create_header_waypoint();
    this.headerLinks = $(".primary-nav a");
    this.create_page_section_waypoints();
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
