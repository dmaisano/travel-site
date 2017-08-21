import MobileMenu from './modules/MobileMenu';
import LazyLoad from './modules/LazyLoad';
import $ from 'jquery';

let menu = new MobileMenu();
let featureItems = new LazyLoad($(".feature-item"), "85%");
let testimonial = new LazyLoad($(".testimonial"), "60%");
