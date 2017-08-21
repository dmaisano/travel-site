import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.triggerElement = $(".large-hero__title");
    this.create_header_waypoint();
  }

  create_header_waypoint() {
    let trigger = this.triggerElement[0];

    new Waypoint({
      element: trigger,
      handler: () => {
        trigger.addClass(".site-header--dark");
      }
    });
  }
}

export default StickyHeader;
