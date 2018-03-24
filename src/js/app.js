import '../styles/app.scss';
import 'bootstrap';
import WOW from 'wowjs';
new WOW.WOW().init();








/**
 * ! Current Date for Full Year
 * **/
$("#current-date").text((new Date).getFullYear());






$(function() {
    console.log('jQuery works...');
});