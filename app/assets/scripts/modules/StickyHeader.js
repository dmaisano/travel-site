import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.triggerElement = $(".large-hero__title");
    this.create_header_waypoint();
  }

  create_header_waypoint() {
    let that = this;

    new Waypoint({
      element: that.triggerElement[0],
      handler: (direction) => {
        // change background-colorfor medium/large screens using the Waypoint
        if(direction == "down" && $(window).width() >= 768) {
          that.siteHeader.css('background-color', 'rgba(23, 51, 72, 0.85)');
        }
        else {
          that.siteHeader.css('background-color', 'rgba(47,85,114,.3)');
        }
      }
    });
  }
}

export default StickyHeader;
