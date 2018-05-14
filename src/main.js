import DigitalKeyboard from 'digital-keyboard';

function returnValue(value){
  document.querySelector('#values').innerHTML = value;
}

new DigitalKeyboard({el: document.querySelector('#app'), type: 'idcard', returnValue: returnValue});