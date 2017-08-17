import $ from 'jquery';

class MobileMenu {
  constructor() {
    $(".site-header__menu-icon").click(() => {
      console.log("Menu button clicked");
    }); 
  }
}

export default MobileMenu;
