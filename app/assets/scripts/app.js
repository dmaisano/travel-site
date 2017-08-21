import MobileMenu from './modules/MobileMenu';
import LazyLoad from './modules/LazyLoad';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

let menu = new MobileMenu();
let featureItems = new LazyLoad($(".feature-item"), "85%");
let testimonial = new LazyLoad($(".testimonial"), "70%");
let stickyHeader = new StickyHeader();
