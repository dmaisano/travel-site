import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';

class LazyLoad {
  constructor(els, offset) {
    this.items_to_reveal = els;
    this.offsetPercent = offset;
    this.initallyHidden();
    this.createWayPoints();
  }

  initallyHidden() {
    this.items_to_reveal.addClass("reveal-item");
  }

  createWayPoints() {
    for(let item of this.items_to_reveal) {
      let offsetPercent = this.offsetPercent;

      new Waypoint({
        element: item,
        handler: () => {
          $(item).addClass("reveal-item--is-visible");
        },
        offset: offsetPercent
      });
    }
  }
}

export default LazyLoad;
