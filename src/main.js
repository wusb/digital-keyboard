// import DigitalKeyboard from './index';
import DigitalKeyboard from 'digital-keyboard';

function returnValue(value){
  document.querySelector('#values').innerHTML = value;
}

new DigitalKeyboard({el: '#app', type: 'idcard', returnValue: returnValue});