import 'bootstrap';

import './style.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');

console.log(` I would pay ${courseValue} for this awesome course.`);

$(function() {
    alert('hi how are you!!!!');
    console.log('jQuery works!!!!!!!!!.');
});